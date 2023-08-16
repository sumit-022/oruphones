import React, { useEffect } from "react";
import Image from "next/image";
import profile from "../assets/svg/profile-rounded.svg";
import Button from "@/components/atoms/button/action-button";
import ContactInfo from "@/components/cards/dashboard-info/contact-info";
import About from "@/components/cards/dashboard-info/about";
import Skills from "@/components/cards/dashboard-info/skills";
import Professional from "@/components/cards/dashboard-info/professional";
import Certifications from "@/components/cards/dashboard-info/certifications";
import Experience from "@/components/cards/dashboard-info/experience";
import Education from "@/components/cards/dashboard-info/education";
import Modal from "@/components/atoms/modal";
import Input from "@/components/atoms/input";
import axios from "axios";
import { useAccount } from "@/providers/userprovider";

interface ProfileTemplateType {
  user: UserType;
}

interface EditUserType {
  name: string;
  email: string;
  phone: string;
  skills?: string[];
  about?: string;
}

const ProfileTemplate: React.FC<ProfileTemplateType> = ({ user }) => {
  const { setUpdateState } = useAccount();
  const [editUser, setEditUser] = React.useState<EditUserType>({
    name: user.firstName + " " + user.lastName,
    email: user.email,
    phone: user.phone,
    skills: user.skills,
    about: user?.about,
  });
  const [opened, setOpened] = React.useState({ state: false, type: "" });
  const [image, setImage] = React.useState<File | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e?.target?.files?.[0];

    if (file) {
      setImage(file);
    }
  };

  const handleImageUpload = async () => {
    const formData = new FormData();
    if (image) {
      formData.append("image", image);
      formData.append("upload_preset", "af4pgk3a");
      try {
        const res = await axios.post("/api/user/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(res.data);
        setUpdateState((prev) => !prev);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setEditUser((prev) => ({ ...prev, [id]: value }));
  };

  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEditUser((prev) => ({ ...prev, skills: value.split(",") }));
  };

  const onSave = async () => {
    try {
      const res = await axios.put("/api/user/update", {
        name: editUser.name,
        email: editUser.email,
        phone: editUser.phone,
        skills: editUser.skills,
        about: editUser.about,
        id: user._id,
      });
      console.log(res.data);
      setUpdateState((prev) => !prev);
      setOpened({ state: false, type: "" });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (image) handleImageUpload();
  }, [image]);

  return (
    <div className="h-[20%] md:m-0 mx-auto w-11/12 rounded-md relative mt-4 bg-[#1E2875]">
      <p className="text-white uppercase p-2">My Profile</p>
      <div className="absolute bg-white p-4 w-[90%] rounded-md top-2/3 left-1/2 transform -translate-x-1/2">
        <div className="grid lg:grid-cols-2 lg:grid-rows-1 grid-cols-1 grid-rows-2 lg:gap-8">
          <div>
            <div className="flex items-center justify-between py-3">
              <Image src={profile} alt="profile" className="rounded-full" />
              <label htmlFor="image">
                <div className="bg-primary-buttongrey cursor-pointer text-text-blue-600 py-1 px-6 font-sans text-xs font-semibold rounded-full">
                  Upload Photo
                </div>
              </label>
              <input
                type="file"
                className="sr-only"
                id="image"
                onChange={handleImageChange}
              />
            </div>
            <ContactInfo user={user} setOpened={setOpened} />
            <About user={user} setOpened={setOpened} />
            <Skills user={user} setOpened={setOpened} />
          </div>
          <div>
            <Professional />
            <Certifications />
            <Experience />
            <Education />
          </div>
        </div>
      </div>
      {opened.state && (
        <Modal edit={opened.type}>
          <div className="p-4">
            <p className="text-[#1E2875] font-semibold text-lg">Edit</p>
            <Input
              placeholder={
                opened.type === "name"
                  ? "Name"
                  : opened.type === "email"
                  ? "Email"
                  : opened.type === "about"
                  ? "About"
                  : opened.type === "skills"
                  ? "Add a skill"
                  : "Phone"
              }
              id={opened.type}
              type="text"
              label={
                opened.type === "name"
                  ? "Name"
                  : opened.type === "email"
                  ? "Email"
                  : opened.type === "about"
                  ? "About"
                  : opened.type === "skills"
                  ? "Add a skill"
                  : "Phone"
              }
              onChange={
                opened.type === "skills" ? handleSkillsChange : handleEditChange
              }
              value={
                opened.type === "name"
                  ? editUser.name
                  : opened.type === "email"
                  ? editUser.email
                  : opened.type === "about"
                  ? editUser.about || ""
                  : opened.type === "skills"
                  ? editUser.skills?.join(",") || ""
                  : editUser.phone
              }
            />
            <div className="flex justify-end mt-4">
              <Button className="mr-2" onClick={onSave}>
                Save
              </Button>
              <Button onClick={() => setOpened({ state: false, type: "" })}>
                Cancel
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default ProfileTemplate;
