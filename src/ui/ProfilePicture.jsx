function ProfilePicture({ src }) {
  return (
    <div
      className={`flex items-center gap-[12px] py-[8px] px-[12px] rounded-[14px] bg-cover bg-no-repeat bg-center w-[50px] h-[50px] `}
      style={{ backgroundImage: `url(${src})` }}
    />
  );
}

export default ProfilePicture;
