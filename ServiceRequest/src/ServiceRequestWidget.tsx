import * as React from "react";
import { IContextProvider, } from './uxp';
import { FilterPanel } from "uxp/components";

import './styles.scss';
import ServiceModal from "./ServiceModal";

type IPriority = 'high' | "low";
interface IProps {
    priority: IPriority
    expandedFilterPanel?: boolean,
    uxpContext?: IContextProvider,
    scrollStep?: number,
}

interface IDataItem {
    icon: string,
    request: string,
    description: string,
    sections: string[],
    status: string,
    date: string,
}

const ServiceRequestWidget = (props: React.PropsWithChildren<IProps>) => {

    // data set
    let icon = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS41NzciIGhlaWdodD0iMTUuNTc3IiB2aWV3Qm94PSIwIDAgMTUuNTc3IDE1LjU3NyI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzcwNzA3MDt9PC9zdHlsZT48L2RlZnM+PHBhdGggY2xhc3M9ImEiIGQ9Ik0xNy4wMTksM0g0LjU1OGExLjU1NiwxLjU1NiwwLDAsMC0xLjU1LDEuNTU4TDMsMTguNTc3bDMuMTE1LTMuMTE1aDEwLjlBMS41NjIsMS41NjIsMCwwLDAsMTguNTc3LDEzLjlWNC41NThBMS41NjIsMS41NjIsMCwwLDAsMTcuMDE5LDNabS01LjQ1Miw5LjM0NkgxMC4wMDlWMTAuNzg4aDEuNTU4Wm0wLTMuMTE1SDEwLjAwOVY2LjExNWgxLjU1OFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zIC0zKSIvPjwvc3ZnPg==";
    const data: IDataItem[] = [
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "water Leak in ",
            sections: ["Zone 3"],
            status: "pending",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #79",
            description: "Lights not working at ",
            sections: ["Facility one"],
            status: "overdue",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "AC not working at ",
            sections: ["Zone 3"],
            status: "Approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "Smoke in AC Vent ",
            sections: ["Facility 12"],
            status: "assigned",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "water Leak in ",
            sections: ["Zone 3"],
            status: "pending",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #80",
            description: "Parkin damage ",
            sections: ["Parking 1", "A1"],
            status: "approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #79",
            description: "Lights not working at ",
            sections: ["Facility one"],
            status: "overdue",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "AC not working at ",
            sections: ["Zone 3"],
            status: "Approved",
            date: "23/0702020"
        },
        {
            icon: icon,
            request: "Johnson & Johnson request #81",
            description: "Smoke in AC Vent ",
            sections: ["Facility 12"],
            status: "assigned",
            date: "23/0702020"
        },
    ]

    // refs
    const listContainerRef = React.useRef(null);
    const listRef = React.useRef(null);
    const listItemsRef = React.useRef([]);

    // state
    const [currentKey, setCurrentKey] = React.useState<number | 0>(0);
    const [showFooter, setShowFooter] = React.useState(false);
    const [showScrollUp, setShowScrollUp] = React.useState(false);
    const [showScrollDown, setShowScrollDown] = React.useState(false);

    const [showModal, setShowModal] = React.useState(false)

    // toggle scroll buttons
    React.useEffect(() => {
        toggleFooter();
    }, [currentKey])

    React.useEffect(() => {
        console.log("show modal")
        console.log(showModal)
    }, [showModal])

    // toggle scroll buttons
    const toggleFooter = () => {
        // 
        let showFooter = false;
        let showUp = false;
        let showDown = false;

        let listDetails = listRef.current.getBoundingClientRect();
        let lastItemDetails = listItemsRef.current[data.length - 1].getBoundingClientRect();


        if (listDetails.height < (lastItemDetails.height * data.length)) {
            showFooter = true;
            showDown = true;
        }

        if (!((lastItemDetails.top >= listDetails.top + listDetails.height) || (lastItemDetails.top < listDetails.top))) { showDown = false };

        if (currentKey > 0) {
            showUp = true;
        }

        setShowFooter(showFooter);
        setShowScrollUp(showUp);
        setShowScrollDown(showDown)
    }

    // scroll to list item
    const scrollItemToView = (key: number) => {

        let nextItemDetails = listItemsRef.current[key].getBoundingClientRect();
        let scrollTop = nextItemDetails.height * key;

        listRef.current.scrollTo({
            top: scrollTop,
            behavior: 'smooth'
        });
    }

    // handle click on scroll button
    const onClickScrollHandler = (direction: string) => {
        // get key
        let curKey = currentKey;

        if (direction == "up") {
            curKey = curKey - props.scrollStep;
            if (curKey < 0) curKey = 0;
        }
        else {
            curKey = curKey + props.scrollStep;
            if (curKey >= data.length) { curKey = (data.length - 1) };
        }

        setCurrentKey(curKey);
        scrollItemToView(curKey)
    }

    // on scroll list container
    const onScrollList = (e: React.UIEvent<HTMLElement | Event>) => {
        let listContainerDetails = listContainerRef.current.getBoundingClientRect();

        data.map((item: IDataItem, key: number) => {
            let element = listItemsRef.current[key];
            let boundDetails = element.getBoundingClientRect();

            if (boundDetails.top >= listContainerDetails.top + 60 && boundDetails.top <= listContainerDetails.top + 120) {
                setCurrentKey(key)
            }
        })
    }


    let filterPanelProps: any = {
        onOpen: () => { },
        onClose: () => { }
    }

    if (props.expandedFilterPanel) {
        filterPanelProps.fillContainer = listContainerRef
    }

    // render
    return (<>
        <div className={`list-container ${showFooter && " has-footer"} ${(showScrollDown && showScrollUp) ? " full" : " half"}`}
            ref={listContainerRef}
            onScroll={onScrollList}
        >
            <div className="header">

                <div className="title">
                    <div className="icon"></div>
                    <div className="text">Service Requests <span className={props.priority}> {props.priority} priority</span></div>
                </div>

                <div className="filter-container">
                    <FilterPanel {...filterPanelProps} >

                        <div className="filter-item">
                            <label htmlFor="">Filter By</label>
                            <select name="" id="">
                                <option value=""> Select a Filter</option>
                            </select>
                        </div>

                        <div className="filter-item">
                            <label htmlFor="">Sort By</label>
                            <select name="" id="">
                                <option value=""> Select a Option</option>
                            </select>
                        </div>

                    </FilterPanel>
                </div>

            </div>

            <div className="body"
                ref={listRef}
            >

                {
                    data.map((item: IDataItem, key: number) => {
                        return (<div className={`list-thumbnail ${item.status.toLowerCase()}`}
                            ref={(el: any) => (listItemsRef.current[key] = el)}
                            onClick={() => setShowModal(true)}
                        >
                            <div className="icon-placeholder">
                                <img src={item.icon} alt="" />
                            </div>
                            <div className="request-details">
                                <div className="request"> {item.request} </div>
                                <div className="description"> {item.description} </div>
                                <div className="sections">
                                    {
                                        item.sections?.map((section: string) => {
                                            return (<div className="section">{section}</div>)
                                        })
                                    }
                                </div>
                            </div>
                            <div className="status">
                                <div className="label">{item.status}</div>
                                <div className="date">{item.date}</div>
                            </div>
                        </div>);
                    })
                }


            </div>

            {
                showFooter &&
                <div className="footer">
                    {
                        showScrollUp &&
                        <div className="scroll-btn scroll-up" onClick={() => onClickScrollHandler("up")}>
                            <div className="icon-container">
                                <div className="icon"></div>
                            </div>
                        </div>
                    }

                    {
                        showScrollDown &&
                        <div className="scroll-btn scroll-down" onClick={() => onClickScrollHandler("down")}>
                            <div className="icon-container">
                                <div className="icon"></div>
                            </div>
                        </div>
                    }

                </div>
            }

        </div>

        <ServiceModal show={showModal} onClose={() => setShowModal(false)} data={data} />
    </>);
}

// default props
ServiceRequestWidget.defaultProps = {
    scrollStep: 5,
    expandedFilterPanel: false
}

export default ServiceRequestWidget;