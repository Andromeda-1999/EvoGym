// src/scenes/SignIn.tsx
import React, { useState } from 'react';
import { SelectedPage } from '@/shared/types';


type SignInProps = {
  setSelectedPage: React.Dispatch<React.SetStateAction<SelectedPage>>;
  onSignInSuccess: () => void;  // This is the callback type
};

const SignIn: React.FC<SignInProps> = ({ setSelectedPage, onSignInSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);  // State to toggle between sign in and sign up
  

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('Action:', isSignUp ? 'Signing up' : 'Signing in', email, password);
    // Will add authentication logic and handle the navigation upon success later

    // On successful sign-in or sign-up:
    onSignInSuccess();
    setSelectedPage(SelectedPage.Home);
  };

  const toggleForm = () => {
    setIsSignUp(!isSignUp);  // Toggle the boolean state to switch forms
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-xs p-8 space-y-6 bg-white rounded-lg shadow-md">
        <div>
          <label htmlFor="email" className="{inputStyles}">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:bg-primary-500 focus:border-primary-500 sm:text-sm"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password" className="{inputStyles}">Password:</label>
          <input
            id="password"
            type="password"
            value={password}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:bg-primary-500 focus:border-primary-500 sm:text-sm"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {isSignUp && (
          <div>
            <label htmlFor="confirm-password" className="{inputStyles}">Confirm Password:</label>
            <input
              id="confirm-password"
              type="password"
              value={confirmPassword}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:bg-primary-500 focus:border-primary-500 sm:text-sm"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
        )}
        <button type="submit" className="w-full flex justify-center py-2 px-4 rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
          {isSignUp ? 'Create Account' : 'Sign In'}
        </button>
        <p className="{inputStyles}">
          {isSignUp ? 'Already have an account? ' : 'Need an account? '}
          <button
            onClick={toggleForm}
            className="font-medium text-secondary-600 hover:text-secondary-500"
            type="button"
          >
            {isSignUp ? ' Sign In' : ' Sign Up'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
