import React from 'react';

export default function asyncComponent(getComponent) {
    // getComponent = import('~')
    return class AsyncComponent extends React.Component {
        static Component = null;
        state = {Component : AsyncComponent.Component};

        constructor(props) {
            // props = import('~')
            super(props);
            if(AsyncComponent.Component) return;
            getComponent().then(({default: Component}) => {
                AsyncComponent.Component = Component;
                this.setState({Component});
                // props로 들어온 컴포넌트는 해당 컴포넌트가 언마운트 후 다시 마운트 될 때 불러오지 않고,
                // static 값으로 남아있는 이전 컴포넌트로 재사용한다.
            });
        }

        render() {
            const {Component} = this.state
            if(Component) {
                return <Component {...this.props} />
            }
            return null;
        }
    }
}