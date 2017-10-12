import React from 'react';
import { Breadcrumb } from 'antd';
class BreadcrumbCustom extends React.Component {

  render(){
    const { items } = this.props
    if(!items || !items.length < 0) {
      return null
    }
    return(
      <Breadcrumb style={{padding:"12px 0"}}>
        {
          items.map(item => {
            return (
              item.link ? <Breadcrumb.Item href={item.link}>{item.render}</Breadcrumb.Item> : <Breadcrumb.Item>{item.render}</Breadcrumb.Item>
            )
          })
        }
        
      </Breadcrumb>
    )
  }
  
}

export default BreadcrumbCustom