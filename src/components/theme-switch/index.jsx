import React, { useState, useEffect } from 'react'

import * as Dom from '../../utils/dom'
import * as Storage from '../../utils/storage'
import { THEME } from '../../constants'

import './index.scss'

const MoonIcon = () => {
  return (
    <svg
      viewBox="0 0 512 512"
      width="24"
      className="moon-icon"
    >
      <path d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z" />
    </svg>
  )
}

const SunIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className='sun-icon'
    >
      <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm6.312-10.897c-3.314 0-6 2.686-6 6s2.686 6 6 6 6-2.686 6-6-2.686-6-6-6z" />
    </svg>
  )
}

function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeSwitch = () => {
  const [isDark, setDark] = useState(false);
  const [isAnimating, setAnimating] = useState(false);

  const toggleDarkMode = (newMode) => {
    if (!isAnimating) {
      setAnimating(true);
      const theme = getTheme(newMode);
      Storage.setTheme(newMode);

      setTimeout(() => {
        setDark(newMode);
        toggleTheme(theme);
        setAnimating(false);
      }, 300);
    }
  };

  useEffect(() => {
    const initialDarkMode = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK));
    toggleDarkMode(initialDarkMode);
  }, []);

  return (
    <div className={`toggle ${isDark ? 'active' : ''}`}>
      <div
        className={`move ${isDark && isAnimating ? 'shrink-and-fade-out' : ''}`}
        onClick={() => toggleDarkMode(!isDark)}
      >
        {isDark ? <MoonIcon /> : <SunIcon />}
      </div>
    </div>
  );
};