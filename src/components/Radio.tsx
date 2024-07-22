import classNames from "classnames";

type Props = {
  checked?: boolean;
};

export default function Radio({ checked = false }: Props) {
  return (
    <span
      className={classNames(
        "flex-center h-5 w-5 rounded-full ring-1 ring-inset ring-secondary-text",
      )}
    >
      <span
        className={classNames("rounded-full bg-secondary-text transition-all", {
          "h-2 w-2": checked,
          "h-0 w-0": !checked,
        })}
      />
    </span>
  );
}
