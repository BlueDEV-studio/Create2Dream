import logo from "../assets/logo.png.asset.json";

export function Logo({ className = "size-8" }: { className?: string }) {
  return (
    <img
      src={logo.url}
      alt="Create2Dream"
      className={`${className} object-contain select-none`}
      draggable={false}
    />
  );
}
