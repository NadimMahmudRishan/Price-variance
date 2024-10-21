const NavBar = () => {
    const navComponents = ['Home','Menu','Offer','Contract'];
    return (
      <div className="flex justify-between bg-slate-400 p-4">
        <ul className="md:flex md:justify-around  bg-slate-400 p-4">
          {navComponents.map((nav, xid) => (
            <li
              key={xid}
              className=" m-5 px-5 py-2 border rounded-2xl text-2xl font-bold border-red-700"
            >
              {nav}
            </li>
          ))}
        </ul>
        <div className=" md:w-20">
          <img
            className="w-20 rounded-full"
            src="https://i.ibb.co.com/58fpDJF/IMG-20230814-133832.jpg"
            alt="profile.png"
          />
        </div>
      </div>
    );
};

export default NavBar;