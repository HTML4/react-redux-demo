import React from 'react';
import {Link} from 'react-router'
import { Breadcrumb, Icon } from 'antd';
class BreadcrumbCustom extends React.Component {

  render(){
    const { items } = this.props
    if(!items || !items.length < 0) {
      return null
    }

    return(
      <Breadcrumb style={{padding:"12px 0"}}>
        {
          items.map((item, i) => {

            const content = (
              <span>{item.icon
                ? <Icon type={item.icon} style={{ marginRight: 4 }} />
                : ''}{item.name}</span>
            )
            return (
              <Breadcrumb.Item key={i}>
                {
                  item.link ? (
                    <Link to={item.link}>{content}</Link>
                  ) : content
                }
              </Breadcrumb.Item>
            )
          })
        }
        
      </Breadcrumb>
    )
  }
  
}

export default BreadcrumbCustom