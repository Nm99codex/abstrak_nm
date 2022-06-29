export const ServicesComp = ({heading, icon, description, url, compBgWhite}) => {

  
  return (
    
    <div >
        <div
          key={heading}
          className={`group flex md:space-x-4 pl-4 py-8 px-2 servicesCont rounded-[2rem] hover:bg-light ${
            compBgWhite? "bg-white" : ""}`}
        >
          <figure className="flex-initial min-h-full mx-2">
            <img src={icon} className="w-24" alt="icon" />
          </figure>

          <div className="flex flex-col space-y-6 flex-shrink w-9/12 md:pr-8">
            <a href="##" className="text-2xl font-medium hover:text-primary" >{heading}</a>
            <p className="lineClamp font-normal">{description}</p>
            <a
              className="flex"
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <span className="group-hover:bg-primary w-0 group-hover:w-8 group-hover:mr-4 h-[2px] my-3 duration-300" />
              <span className="group-hover:text-primary whitespace-nowrap">Find out more</span>
            </a>
          </div>
        </div>
    </div>
  );
}
