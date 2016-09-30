export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },
    toggleOpen(ev)  {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}