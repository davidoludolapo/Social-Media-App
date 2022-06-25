import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/uploadAction";
import { updateUser } from "../../actions/UserAction.";

function ProfileModal({ modalOpened, setModalOpened, data }) {
  const theme = useMantineTheme();

  // separate password from the data so another user cannot watch the modified password of another user
  const { password, ...other } = data;
  const [formData, setFormData] = useState(other);
  const [profileImage, setProfileImage] = useState(null);
  const [coverImage, setCoverImage] = useState(null);
  const dispatch = useDispatch();
  const param = useParams();
  const { user } = useSelector((state) => state.authReducer.authData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      event.target.name === "profileImage"
        ? setProfileImage(img)
        : setCoverImage(img);
    }
  }; 

  const handleSubmit = (e) =>{
    e.preventDefault()
    let UserData = formData
    if (profileImage) {
      const data = new FormData()
      const filename = Date.now() + profileImage.name
      data.append("name", filename)
      data.append("file", profileImage)
      UserData.profilePicture = filename
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }

    if (coverImage) {
      const data = new FormData()
      const filename = Date.now() + coverImage.name
      data.append("name", filename)
      data.append("file", coverImage)
      UserData.coverPicture = filename
      try {
        dispatch(uploadImage(data))
      } catch (error) {
        console.log(error);
      }
    }
    dispatch(updateUser(param.id, UserData))
    setModalOpened(false)
  }
  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%"
      padding={"50px"}
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm" onSubmit={handleSubmit}>
        <h3>Your Info</h3>

        <div>
          <input
            type="text"
            name="firstname"
            className="infoInput"
            placeholder="First name"
            onChange={handleChange}
            value={formData.firstname}
          />
          <input
            type="text"
            name="lastname"
            className="infoInput"
            placeholder="Last name"
            onChange={handleChange}
            value={formData.lastname}
          />
        </div>
        <div>
          <input
            type="text"
            name="worksAt"
            className="infoInput"
            placeholder="Works At"
            onChange={handleChange}
            value={formData.worksAt}
          />
        </div>

        <div>
          <input
            type="text"
            name="livesin"
            className="infoInput"
            placeholder="Lives in"
            onChange={handleChange}
            value={formData.livesin}
          />
          <input
            type="text"
            name="country"
            className="infoInput"
            placeholder="Country"
            onChange={handleChange}
            value={formData.country}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Relationship Status"
            className="infoInput"
            name="relationship"
            onChange={handleChange}
            value={formData.relationship}
          />
        </div>

        <div>
          Profile Image
          <input type="file" name="profileImage" onChange={onImageChange} />
          Cover Image
          <input type="file" name="coverImage" onChange={onImageChange} />
        </div>
        <button className="button infoButton" type="submit" >Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
