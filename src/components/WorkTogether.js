import { Button, Typography } from "@mui/material";

export default function WorkTogether (){


    return (
        <section className={`flex flex-col items-center p-20 h-[50vh] md:h-[50vh] lg:h-[60vh] bg-primary mb-10 relative `} >
            <Typography variant="subtitle2" className="text-accent">Need a successful project?</Typography>
            <Typography variant="h3" className="capitalize text-white">Lets work together</Typography>
            <button className="bg-white hover:bg-accent hover:text-white px-8 py-4 rounded-[1rem] my-8 transition-all duration-500">Estimate Project</button>
            
            <div className="flex flex-row absolute bottom-0 -mb-10 justify-center">
                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/footer/laptop-poses.png" alt="Female Artwork" className="w-4/12 md:w-3/12 h-auto  md:-mr-16 z-[900] "/>
                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/footer/chat-group.png" alt="Paper Artwork" className="w-4/12 md:w-5/12 h-auto z-[600]"/>
                <img src="https://new.axilthemes.com/themes/abstrak/wp-content/themes/abstrak/assets/images/footer/bill-pay.png" alt="Male Artwork" className="w-4/12 md:w-3/12 h-auto -ml-20 md:-ml-40 z-[800]"/>
            </div>
        </section>
    )
}