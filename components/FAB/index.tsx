"use client";

type FABProps = {
  handleClick: () => void;
};

export default function FAB({ handleClick }: FABProps) {
  return (
    <button onClick={handleClick} className="fab">
      +
    </button>
  );
}
