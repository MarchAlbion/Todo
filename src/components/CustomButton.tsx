import clsx from "clsx";

type Props = {
  text: string;
  type: "submit" | "reset" | "button";
  color?: string;
  onClick?: () => void;
};

export const CustomButton = ({
  text,
  type,
  color = "green",
  onClick,
}: Props) => {
  const backgroundColor = `bg-${color}-800`;

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(
        "rounded px-2 py-1 text-xs font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hover:brightness-150",
        backgroundColor
      )}
    >
      {text}
    </button>
  );
};
