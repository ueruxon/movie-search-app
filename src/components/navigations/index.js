import React from 'react';

import Page from "./page";

class NavLink extends React.Component {

    state = {
        activePage: +this.props.currentPage || 1,
    }

    createPaginations() {
        const paginationList = [];
        const { totalPages } = this.props;
        const { activePage } = this.state;
        
        paginationList.push(
            <Page page={`< Prev`} key={`prev`}
                href={`/pages/${this.state.activePage - 1}`}
                handleChange={() => this.setState((prevState) => {
                    return { activePage: prevState.activePage - 1 }
                })}
                disabled={activePage === 1 ? `disabled` : ""}
            />
        )

        for (let i = 1; i < totalPages; i++) {
            const href = `/pages/${i}`;
            const currentPage = activePage === i ? `active` : ``;
            
            if (paginationList.length >= 7) break;

            paginationList.push(
                <Page page={i} key={i} 
                    href={href} 
                    handleChange={(current) => this.setState({ activePage: current })} 
                    activePage={currentPage}
                />
            )
        }

        paginationList.push(
            <Page page={`Next >`} key={`next`}
                href={`/pages/${activePage +1}`}
                handleChange={() => this.setState((prevState) => {
                    return { activePage: prevState.activePage + 1 }
                })}
                disabled={activePage +1 === totalPages ? `disabled` : ""}
            />
        )
        
        return paginationList;
    }


    render() {
        return (
            <ul className="pagination pagination-lg">
                {this.createPaginations()}
            </ul>
            
        )
    }
}

export default NavLink;