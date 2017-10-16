import { Icon, Input, AutoComplete } from 'antd';
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
  renderTitle(title) {
    return (
      <span>
        {title}
        <a
          style={{ float: 'right' }}
          href="https://www.google.com/search?q=antd"
          target="_blank"
          rel="noopener noreferrer"
        >更多
        </a>
      </span>
    );
  }

  render() {
    const options = ["1", "11", "2", "23"]
    return (
      <div className="certain-category-search-wrapper" style={{ width: 250 }}>
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
    );
  }
}
