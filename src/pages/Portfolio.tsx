import Footer from "../components/Footer";
import Header from "../components/Header";
import Spinner from "../components/Spinner";
import "../styles/PortfolioStyle.css";
import { FaPen } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useEffect, useState } from "react";
import HistoryPort from "../components/HistoryPort";

interface Profile {
  avatar_url: string;
  name: string;
  location: string;
  email: string;
  bio: string;
}

interface Experience {
  title: string;
  period: string;
  tags: string[];
  description: string;
  repositoryLink: string;
}

function Portfolio() {
  const [profile, setProfile] = useState<Profile>({
    avatar_url: "",
    name: "",
    location: "",
    email: "",
    bio: "",
  });
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("https://api.github.com/users/seu-usuario");
        const data = await response.json();

        setProfile({
          avatar_url: data.avatar_url,
          name: data.name,
          location: data.location,
          email: data.email || null,
          bio: data.bio || null,
        });
      } catch (error) {
        console.error("Erro ao carregar os dados do GitHub:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
    const storedExperiences = localStorage.getItem("experiencesData");
    if (storedExperiences) setExperiences(JSON.parse(storedExperiences));
  }, []);

  useEffect(() => {
    localStorage.setItem("experiencesData", JSON.stringify(experiences));
  }, [experiences]);

  const handleAddExperience = () => {
    setExperiences([
      ...experiences,
      {
        title: "",
        period: "",
        tags: [],
        description: "",
        repositoryLink: "",
      },
    ]);
  };

  const handleExperienceChange = (
    index: number,
    field: keyof Experience,
    value: string
  ) => {
    const updatedExperiences = [...experiences];
    if (field === "tags") {
      updatedExperiences[index].tags = value.split(",").map((tag) => tag.trim());
    } else {
      updatedExperiences[index][field] = value;
    }
    setExperiences(updatedExperiences);
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSaveChanges = () => {
    localStorage.setItem("profileData", JSON.stringify(profile));
    setIsEditing(false);
    alert("Perfil atualizado com sucesso!");
  };

  if (loading) {
    return <div><Spinner /></div>;
  }

  return (
    <>
      <Header />
      <div className="content">
        <button onClick={handleEditToggle} className="editButtom">
          {isEditing ? <FaCheck className="penAfter" /> : <FaPen className="penBefore" />}
        </button>
        <section id="inicio"></section>
        <div className="profile">
          <div className="profileInfo">
            <img src={profile.avatar_url} alt="Foto de perfil" />
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="location"
                  value={profile.location}
                  onChange={handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                />
              </>
            ) : (
              <>
                <p>{profile.name}</p>
                <p>{profile.location}</p>
                <p>{profile.email}</p>
              </>
            )}
          </div>
          <div className="summary">
            <p>Hello, eu sou {profile.name}</p>
            {isEditing ? (
              <input
                type="text"
                name="bio"
                value={profile.bio}
                onChange={handleInputChange}
              />
            ) : (
              <p>{profile.bio}</p>
            )}
          </div>
          {isEditing && (
            <button onClick={handleSaveChanges}>Salvar Alterações</button>
          )}
        </div>
        <section id="minhaHistoria"></section>
        <HistoryPort isEditing={isEditing} />
        <section id="experiencias"></section>
        <div className="xp">
          <h2>Experiências</h2>
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              {isEditing ? (
                <>
                  <input
                    type="text"
                    placeholder="Título"
                    value={experience.title}
                    onChange={(e) =>
                      handleExperienceChange(index, "title", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Período de atuação"
                    value={experience.period}
                    onChange={(e) =>
                      handleExperienceChange(index, "period", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Tags (separadas por vírgula)"
                    value={experience.tags.join(", ")}
                    onChange={(e) =>
                      handleExperienceChange(index, "tags", e.target.value)
                    }
                  />
                  <textarea
                    placeholder="Descrição"
                    value={experience.description}
                    onChange={(e) =>
                      handleExperienceChange(index, "description", e.target.value)
                    }
                  />
                  <input
                    type="text"
                    placeholder="Link do repositório"
                    value={experience.repositoryLink}
                    onChange={(e) =>
                      handleExperienceChange(index, "repositoryLink", e.target.value)
                    }
                  />
                </>
              ) : (
                <>
                  <h3>{experience.title}</h3>
                  <p>{experience.period}</p>
                  <p>{experience.tags.join(", ")}</p>
                  <p>{experience.description}</p>
                  {experience.repositoryLink && (
                    <a
                      href={experience.repositoryLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Repositório
                    </a>
                  )}
                </>
              )}
            </div>
          ))}

          {isEditing && (
            <button onClick={handleAddExperience}>Adicionar Experiência</button>
          )}
        </div>
        <section id="contato"></section>
        <div className="xpFooter">
          Sinta-se livre para me contatar a qualquer momento!
          <h1>{profile.email || "email@email.com"}</h1>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Portfolio;
