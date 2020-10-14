import React from "react"

function debounce (fn, ms) {
  let timer

  return _ => {
    clearTimeout(timer)

    timer = setTimeout(_ => {
      timer = null
      fn.apply(this, arguments)
    }, ms)
  }
}

class ButtonScrollToTop extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isVisible: false,
    }

    this.handleScroll = debounce(this.handleScroll.bind(this), 300)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll () {
    this.setState({ isVisible: window.pageYOffset > 300 })
  }

  scrollToTop () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll)
  }

  render () {
    const { isVisible } = this.state

    return (
      <div>
        {
          isVisible && (
            <div
              onClick={() => this.scrollToTop()}
              className="flex items-center cursor-pointer fixed font-bold text-lg text-white bg-black rounded-full h-12 w-12"
              style={{right: "15px", bottom: "30px"}}

            >
              <div className="flex-1 text-center">^</div>
            </div>
          )
        }
      </div>
    )
  }
}

export default ButtonScrollToTop
