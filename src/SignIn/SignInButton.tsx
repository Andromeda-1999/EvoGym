import React from "react";
import { SelectedPage } from "../shared/types";

type SignInButtonProps = {
  children: React.ReactNode;
  setSelectedPage?: (value: SelectedPage) => void;
  onClick?: () => void;  // Ensure onClick is accepted and used
};

const SignInButton: React.FC<SignInButtonProps> = ({ children, onClick }) => {
  return (
    <button
    className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={onClick}  // Use the passed onClick
    >
      {children}
    </button>
  );
};

export default SignInButton;