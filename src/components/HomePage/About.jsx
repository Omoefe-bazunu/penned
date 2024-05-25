
export const About = () => {
  return (
    <div className="AboutWrapper w-5/6 h-full flex justify-start items-center gap-8" >
        <div className="featuredImage bg-cover bg-center bg-no-repeat h-96 bg-slate-500 rounded-md w-full border-r-2 border-white"></div>
        <div className="AboutDetails text-white flex flex-col justify-start gap-3 border-l-2 border-white pl-8 w-full">
            <p className=" font-light">PEENED is a "free for all" Blog that allows creatives around the world to pen their thoughts and share their stories to a global audience. Regardless of your age, field or region, PENNED is free for you to be at your best.
            </p>
            <p className="">PENNED was developed by Omoefe Bazunu, a software developer based in Nigeria. The web app is part of a project embarked upon in collaboration of with a fellow developer, Solauden Warith, also of Nigeria with the aim of building projects that provides digital  solutions and contributes to modern innovations.</p>
            <p className=""> You're free to sign up and start penning your thoughts as much as you desire on any decent and non-sexually or violence inciting topic. Also try to engage in other people's posts by commenting and reacting to keep the community active and interesting.</p>
        </div>

    </div>
  )
}
