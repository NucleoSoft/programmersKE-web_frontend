function Settings() {
  return (
    <div className="bg-white dark:bg-black h-screen grid grid-flow-col gap-2 p-2">
      <div className="bg-slate-300 dark:bg-slate-900 col-span-1 rounded-md p-2">
        <span>Appearance</span>
      </div>
      <div className="bg-gradient-to-bl from-primary to-secondary col-span-5 rounded-md">
        <div
          className="bg-slate-300 dark:bg-slate-900 bg-opacity-75 dark:bg-opacity-75 
                            rounded-md h-full"
        ></div>
      </div>
    </div>
  );
}

export default Settings;
