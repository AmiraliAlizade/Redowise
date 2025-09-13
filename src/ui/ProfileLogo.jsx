function ProfileLogo() {
  return (
    <div className="flex flex-col  items-center w-[50px] h-[50px] rounded-full bg-[#AD5F00] reletive">
      <span className="absolute top-[27%]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="19"
          viewBox="0 0 18 19"
          fill="none"
        >
          <ellipse cx="8.99988" cy="9.25" rx="9" ry="9" fill="#FFF394" />
        </svg>
      </span>

      <span className="absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
          fill="none"
        >
          <mask
            id="mask0_519_721"
            //   style="mask-type:alpha"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="50"
            height="50"
          >
            <circle cx="25" cy="25" r="25" fill="#C4C4C4" />
          </mask>
          <g mask="url(#mask0_519_721)">
            <ellipse cx="24.9998" cy="44" rx="19" ry="11" fill="#FFF394" />
          </g>
        </svg>
      </span>
    </div>
  );
}

export default ProfileLogo;
