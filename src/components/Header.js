import React from 'react'
import {  Navbar, Nav } from 'react-bootstrap'
let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://localhost:3005'
} else {
   // heroku url here
}
 const Header = (props) => {
   

   const logoutUser = async (event) => {
    const url = baseUrl + '/user/logout'
    try {
      const response = await fetch(url, {
        method: 'DELETE',
        credentials: "include" 
      })

      if (response.status === 200) {
        console.log("User has been logged out")
        props.setUser('')
        props.setPage('home')
      }
    }
    catch (err) {
      console.log('Error => ', err);
    }
  }
    
        return (
            <Navbar bg="success" variant="dark" expand="md">
                <Navbar.Brand href="/">
                    <img
                        alt=""
                        src="https://i.etsystatic.com/isla/aa4c64/34539361/isla_500x500.34539361_71uzp77a.jpg?version=0"
                        width="120"
                        height="100"
                        /> 
            </Navbar.Brand>
           
            <Navbar.Collapse className="justify-content-start">
              <Nav className="justify-content-start">
                <Nav.Link href="/">Home</Nav.Link> <br/>
                <Nav.Link onClick={() => props.setPage('tshirts')}>T-Shirts</Nav.Link>
                <Nav.Link onClick={() => props.setPage('sweatshirts')}>Sweatshirts</Nav.Link>
                <Nav.Link onClick={() => props.setPage('hoodies')}>Hoodies</Nav.Link>
                <Nav.Link onClick={() => props.setPage('tanktops')}>Tanktops</Nav.Link>
                <Nav.Link onClick={() => props.setPage('products')}>All Products</Nav.Link>
                <Nav.Link href="#disabled" disabled>Create-Your-Own <br/> Coming Soon!</Nav.Link>
              </Nav>
              </Navbar.Collapse>
              <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
            {
              props.username
              ? <div>
                  Signed in as: <br/>{props.username} <br/>
                  <button onClick={logoutUser}>Logout</button>
                  <Nav.Link onClick={() => props.setPage('cart')}>
                    <img
                        alt=""
                        src="data:image/png;base64,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"
                        width="30"
                        height="30"
                        /> 
            </Nav.Link>
              
                </div>
              :
              <Nav className="justify-content-end">
                <Nav.Link onClick={() => props.setPage('register')} id='signup'>Register</Nav.Link>
                <Nav.Link onClick={() => props.setPage('login')} id='login'>Login</Nav.Link>
                <Nav.Link onClick={() => props.setPage('cart')}>
                    <img
                        alt=""
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAe1BMVEX///8AAAC9vb3u7u5xcXFRUVFtbW1JSUl9fX0xMTH7+/vPz8+kpKT39/e3t7dkZGTp6enDw8OWlpbg4ODV1dVcXFwaGhrc3Nyvr68QEBA6Ojp/f3+JiYmdnZ01NTXHx8ciIiJBQUGHh4cLCwtNTU1gYGAqKioYGBiQkJBcQVxfAAAFsklEQVR4nO2da3eqSgyGxVsVL6iVatVatdXd//8LzyYBt0DtATpvMsuV51O/NCTIzCTvZKDVMgzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMCQYbQffsn3X9swR0+AuY23f3HC4H+GLtm9uuB9gEMy0nXPC4ocI29rOuWG8GX4DRfil7RuSXhLhp7YXSHZJhK8TbTeAtOkxfdZ2A8iMIlxru4HkNYlwq+0FkiiJcK/tBRJeJzvabgB5pwiX2m4AmTxS8v09L0mEfW0vkHRpzdf2AsmYHtNp2xvmrjOs5U91lQ6OU6xQO54yT24jbA21AyrjOMKTdjwlYscR/qBRKbFwHOEzWV1POh7AGZZzfZOsnlxbbcSafHGujD0lVnuurTaC0o8/zs1+0Y1zbrYJpOq6TyHnFOHKud36oMoAf5QMWCl3Sex23dutzRtFCCjH48Tu0b3d2sAkFb51HoimVKsOAIZHFOEIYLkeHdiE0AFNYXUBytObxHKEsFwL2mL4gIwWSiWGCMu1AG4TrVGzdC0mH4kXO4htVjLmENvV4SIHs10bQsqyuoAKC+bTh/JikDiBapvYIo1XhWb0M8j4FLcSVaYDHSo8yKcg69VYYhSMjAA3UVdljM2OqbzYoKxXop+4cICZZyUjhNmvwAFbpb6rKxkzcPqPK1yqMkIpGBkBqvisygKt+EXaa36Mrm/UlQy6PrKxR1vJwOccPNW8Aa/wM238ZA4S1KuyQ080ae2it3tB20Out7fzKCsZdHVss/JKVclYARWMjInAXbzPFKlgZByTa7huEqgKVMHIEJjN7rORuL2aSkYoshrPFJUMmYwqfEFnhvcZyyxVPfyiew+hbvOFXnkxlEkZ9XoypBQGPSVjjlYwMoZYtes+YuND7XSJ2BwnNGeXCA9SMpiWkiGXa8jkTmUE80WR/LeMYM5PNYz79s7/Q7Bug+6k30Wy9tZRMkSvqqJkiGpgAppeGVEdU0XJENWiBbT1ErL7CRo9GcKZVCCvZAjv68Xy5QX1YMjtzcL3mssEUoUFA+8XKCHdgo3u+Sgj3ucC7tspI96rROP+Inc9+X4zcP9cGbqeZM8guAeyhHyOId2TofCSI2gvchnuvxZtiqRa5iB2OYUeelklQ+McBPJcRxmNsywT0elbpYtH9DV8KmfKgGfkyqicC5wLTjUqb6ka8btO9p9PAhxlFYyEN2rIEEYwC56pvI1H8Jz8SiM+yWq0oxOgYNr9lF7xsy/JQC7AdvrMaB94xsE/ofZhYCCssml10ErAqYz+yzFw8PaBthdISM//0PYCyeP/ho8/Dnku1X6vApSHXw/TxzToP25Ow9LlX/ZdSQaCG2tatYVgiA9fH/6dT/ePHmGrNVbQaaRfeT9adHuSRI+cZBiGYTDLRRSfB9PfCe9he3uOoy8fZ8325bos/yIh312XPv03iBaIbxfmphvfuc9L7L2qXMLCPk2zH2BUyGB8+hRhr5heNemUmhWNXFRfKJZjnbq0ieI//NdrA+eyzZBedEz/8ucDYezPManeQu7na9AMxt2jwSmZi2eRX88pb9Rkp0t4NNX/pNA5N4Kp88IbKaibv9/Uf1Z7q487Ef4JeDyfunLxl9AA+rdRw61SdZuXiv/l0WcY0pft3wy8RgvGqDDwWM/zZE285IcMt9jVPaxfjLDtU4SFtshmvcPFM8wnn55SPjN3Vfr6jSb6kD6ReW0nmeTmZ23ecxkIH7eu38PPNybrdIwbDWYY/CXvj2QinPFa0eCdGWnafU6WmVGqVXrwmQkm3ccIgmGmMDY5hpHmMcHrNY33ZcFvZWv+DU3k90nRiC+jkIjzvjXrVX7OG9l784wStx+de2kqTc82N1Yif2onZnn9GX9zxmSdDeSN3Fmc6nTaX9vT22+3Flbj02A39aVsMgzDMAzDMAzDMAzDMAzDMAzDMAzDMAzDMIj/AJ4rQpnCPv5rAAAAAElFTkSuQmCC"
                        width="30"
                        height="30"
                        /> 
            </Nav.Link>
              </Nav>

            }

                </Navbar.Text>
              </Navbar.Collapse>
          </Navbar>
        )
      
    }
    

    export default Header;