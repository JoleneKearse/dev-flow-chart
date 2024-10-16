import classNames from "classnames";

type ColorBlobProps = {
  size: string;
  color: string;
};

const ColorBlob = ({ size, color }: ColorBlobProps) => {
  return (
    <div
      className={classNames(
        `w-${size}`,
        `bg-${color}`,
        "aspect-square",
        "-mx-12"
      )}
    ></div>
  );
};

export default ColorBlob;
