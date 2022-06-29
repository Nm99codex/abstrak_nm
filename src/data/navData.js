export const navElements = [
        {
            link: "Digital Agency",
            dropdown: [
                {
                    text: ["Digital Agency", , ,],
                    src: "#"
                },
                {
                    text: ["Creative Agency"],
                    src: "#"
                },
                {
                    text: ["Personal Portfolio"],
                    src: "#"
                },
                {
                    text: ["Home Startup"],
                    src: "#"
                },
                {
                    text: ["Corporate Agency"],
                    src: "#"
                },
                {
                    text: ["Digital Agency - One Page"],
                    src: "#"
                },
                {
                    text: ["Creative Agency"],
                    src: "#"
                },


            ],
            ClickedFunction: function () {
                
                setDaclicked((prev) => !prev);
                return daclicked;
            },
            status: daclicked


        },
        {
            link: "Services",
            dropdown: [
                {
                    text: ["Creative Agency"],
                    src: "services"
                },
                {
                    text: ["Services"],
                    src: "/services"
                }
            ],
            ClickedFunction: function () {
                
                setServiceClicked((prev) => !prev);
            },
            status: serviceClicked
        },
        {
            link: "Portfolio",
            dropdown: [
                {
                    text: ["Creative Agency"],
                    src: "#"
                }
            ],
            ClickedFunction: function () {
                
                setPortfolioClicked((prev) => !prev);
                return portfolioClicked;
            },
            status: portfolioClicked
        },
        {
            link: "Pages",
            dropdown: [
                {
                    text: ["Creative Agency"],
                    src: "#"
                }
            ],
            ClickedFunction: function () {
                
                setPagesclicked((prev) => !prev);
                return pagesclicked;
            },
            status: pagesclicked
        },
        {
            link: "Blogs",
            dropdown: [
                {
                    text: ["Creative Agency"],
                    src: "#"
                }
            ],
            ClickedFunction: function () {
                
                setBlogsclicked((prev) => !prev);
                return blogsclicked;
            },
            status: blogsclicked
        },

    ];