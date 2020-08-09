import React, { Component } from 'react'
import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item.component';
export class Directory extends Component {
    state={
        sections: [
            {
                title:'jeans',
                imageUrl:'https://images.unsplash.com/photo-1572897938832-fcce7f53ccaa?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
                id:1,
                linkUrl:'jeans'
            },
            {
                title:'shirts',
                imageUrl:'https://images.unsplash.com/photo-1520410006060-eb5c4710b802?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80',
                id:2,
                linkUrl:''
            },
            {
                title:'sneakers',
                imageUrl:'https://images.unsplash.com/photo-1553012780-32f198e6749d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
                id:3,
                linkUrl:''
            },{
                title:'women',
                imageUrl:'https://images.unsplash.com/photo-1513441863195-bd50bb875298?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80',
                id:4,
                size: 'large',
                linkUrl:''
            },
            {
                title:'men',
                imageUrl:'https://images.unsplash.com/photo-1530555418970-00d62041e8c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80',
                id:5, 
                size: 'large',
                linkUrl:''
            }
        ]
    }
    render() {
        return (
            <div className="directory-menu" >
                {this.state.sections.map(section => (
                    <MenuItem key={section.id} linkUrl={section.linkUrl} size={section.size} title={section.title} imageUrl={section.imageUrl}/>    
                ))}
            </div>
           
        )
    }
}

export default Directory
