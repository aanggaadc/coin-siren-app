export default function HumButton({
  toggled,
  setToggled,
}: {
  toggled: boolean;
  setToggled: (toggled: boolean) => void;
}) {
  return (
    <button onClick={() => setToggled(!toggled)} className="hum_btn_wrapper">
      <span
        className={`hum_lines ${
          toggled ? "rotate-45 translate-y-1" : "-translate-y-0.5"
        }`}
      ></span>
      <span
        className={`hum_lines my-0.5 ${toggled ? "opacity-0" : "opacity-100"}`}
      ></span>
      <span
        className={`hum_lines ${
          toggled ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
        }`}
      ></span>
    </button>
  );
}
