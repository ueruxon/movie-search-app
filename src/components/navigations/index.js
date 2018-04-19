import React from 'react';
import { withRouter } from 'react-router';

import Page from "./page";

class NavLink extends React.Component {

    createPaginations() {
        const paginationList = [];
        const { totalPages } = this.props;
        const  activePage  = +this.props.match.params.id || 1;
    
        paginationList.push(
            <Page page={`< Prev`} key={`prev`}
                href={`/pages/${activePage - 1}`}
                disabled={activePage === 1 ? `disabled` : ""}
            />
        )

        if (totalPages <= activePage +3) {
            for (let i = activePage - 4; i <= totalPages; i++) {
                const href = `/pages/${i}`;
                const currentPage = activePage === i ? `active` : ``;

                if (paginationList.length >= 7) break;

                paginationList.push(
                    <Page page={i} key={i}
                        href={href}
                        activePage={currentPage}
                    />
                )
            }
            
        } else if (activePage >= 3 ) {
            for (let i = activePage - 2; i < activePage + 5; i++) {
                const href = `/pages/${i}`;
                const currentPage = activePage === i ? `active` : ``;
                
                if (paginationList.length >= 7) break;

                paginationList.push(
                    <Page page={i} key={i}
                        href={href}
                        activePage={currentPage}
                    />
                )
            }
        } else {
            for (let i = 1; i < totalPages; i++) {
                const href = `/pages/${i}`;
                const currentPage = activePage === i ? `active` : ``;
                
                if (paginationList.length >= 7) break;
    
                paginationList.push(
                    <Page page={i} key={i} 
                        href={href} 
                        activePage={currentPage}
                    />
                )
            }
        }

        paginationList.push(
            <Page page={`Next >`} key={`next`}
                href={`/pages/${activePage +1}`}
                disabled={activePage === totalPages ? `disabled` : ""}
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

export default withRouter(NavLink);