import { Icon, Input, AutoComplete, Popover } from 'antd';
import React from 'react';
const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;
const dataSource = [{
  title: '话题',
  children: [{
    title: 'AntDesign',
    count: 10000,
  }, {
    title: 'AntDesign UI',
    count: 10600,
  }],
}, {
  title: '问题',
  children: [{
    title: 'AntDesign UI 有多好',
    count: 60100,
  }, {
    title: 'AntDesign 是啥',
    count: 30010,
  }],
}, {
  title: '文章',
  children: [{
    title: 'AntDesign 是一个设计语言',
    count: 100000,
  }],
}];

export default class AutoCompleteSelect extends React.Component {


  constructor(props) {
    super(props);
  }
  
  componentDidMount(){
    // const height = this.wrapper.clientHeight
    // const top = this.wrapper.offsetTop
    // const left = this.wrapper.offsetLeft
    // console.log(this.box)
    // this.box.style.left = left + 'px'
    // this.box.style.top = top + height + 'px'
  }

  renderBox() {
    return (
      <div className="selectWrap" style={{width: 300}}>
        <div className="header f-tac">请选择交易会员或输入交易会员的拼音</div>
        <ul className="cont f-cb">
          <li>广州先贸</li>
          <li>广州先贸</li>
          <li>广州先贸</li>
          <li>广州先贸</li>
        </ul>
        <ul className="footer f-cb">
          <li>A</li>
          <li>B</li>
          <li>C</li>
          <li>D</li>
        </ul>
      </div>
    )
  }

  render() {
    const options = ["1", "11", "2", "23"]
    return (
      <Popover
        overlayClassName="AutoSelectRoot"
        content={this.renderBox()}
        trigger="click"
        visible={true}
        placement="bottomLeft"
        onVisibleChange={this.handleVisibleChange}
      >
        <div ref={e => this.wrapper = e} className="certain-category-search-wrapper" style={{ width: 250 }}>
          <AutoComplete
            className="certain-category-search"
            dropdownClassName="certain-category-search-dropdown"
            dropdownMatchSelectWidth={false}
            dropdownStyle={{ width: 300 }}
            size="large"
            style={{ width: '100%' }}
            dataSource={options}
            placeholder="input here"
            optionLabelProp="value"
          >
            <Input onFocus={() => console.log("1")} suffix={<Icon type="search" className="certain-category-icon" />} />
          </AutoComplete>
         
        </div>
      </Popover>
    );
  }
}
// <div style={{position: "absolute", zIndex: 999, background: "#fff", width: 250, height: 200}} ref={e => this.box = e}></div>