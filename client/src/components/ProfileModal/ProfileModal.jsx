import { Modal, useMantineTheme } from "@mantine/core";

function ProfileModal({ modalOpened, setModalOpened }) {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size='55%'
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
      <form className="infoForm">
        <h3>Your Info</h3>

        <div>
          <input
            type="text"
            name="firstname"
            className="infoInput"
            placeholder="First name"
          />
          <input
            type="text"
            name="lastname"
            className="infoInput"
            placeholder="Last name"
          />
        </div>
        <div>
        <input
            type="text"
            name="worksAt"
            className="infoInput"
            placeholder="Works At"
          />
        </div>

        <div>
        <input
            type="text"
            name="livesIn"
            className="infoInput"
            placeholder="Lives in"
          />
          <input
            type="text"
            name="country"
            className="infoInput"
            placeholder="Country"
          />
        </div>
        <div>
            <input type="text" placeholder="Relationship Status" className="infoInput" />
        </div>

        <div>
            Profile Image
            <input type="file" name="profileImg" />
            Cover Image
            <input type="file" name="coverImg" />
        </div>
        <button className="button infoButton">Update</button>
      </form>
    </Modal>
  );
}

export default ProfileModal;
