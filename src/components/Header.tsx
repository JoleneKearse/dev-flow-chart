import ColorBlob from "./ColorBlob";

const Header = () => {
  return (
    <header className="w-3/5 flex relative justify-center items-center py-20">
      <ColorBlob size="1/4" color="salmon" />
      <ColorBlob size="1/4" color="pink" />
      <ColorBlob size="1/4" color="purple" />
      <ColorBlob size="1/4" color="fushia" />
      <ColorBlob size="1/4" color="orange" />
      <h1 className="absolute text-5xl font-extrabold text-zinc-100 text-stroke-lg">
        Dev Flow
      </h1>
    </header>
  );
};

export default Header;
