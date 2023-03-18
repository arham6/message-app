import React from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../Context/AccountProvider'
import MenuHeaderStyle from "./MenuHeader.module.css"
export default function MenuHeader() {
  
    const {account}=useContext(AccountContext);
    //console.log(account)
  return (
    
    <div className={MenuHeaderStyle.menuheaderdiv}>
        <img className={MenuHeaderStyle.dp} src={account.picture} alt="dp"/>
        {/* <button className={MenuHeaderStyle.dotsicon}><img className={MenuHeaderStyle.dotsicon} alt='3dot' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADw8PCZmZn8/Py5ubmOjo7Dw8OcnJzW1tb29va+vr5UVFTd3d22trbZ2dnNzc0tLS2GhoaAgIDl5eUyMjJHR0cYGBijo6N0dHQ3Nzc9PT0jIyOKioqvr68oKChgYGBsbGwLCwtOTk5jY2MeHh4XFxd25VJEAAADwklEQVR4nO3ai3KiQBCFYRGC4P0eE42Jub3/I65I3LgFPd2N1CZl/d8DnJKx6ZlhptMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3a9TbxGmajfP+lUHJZJDFaZwNJsmVSf18nKVpvOmNrgzqdJbZMPq2mk8bJ03S9UXSOp00TprOVxdJw2zZOKnT6V3+qNJ91mj897NK0mzfJCjJ7itJ616TpKPpcyXrJHYnjeuDorE7Ka4Pem5SW91hfdjRp2/MRisx6dH3HvU+xaRh15VUhIlZhbkjaRNM2jiSFsEkZ6kK1fDX2pz0oCQ9mJOqTeFfmecBUyXsWF/GhvOiJr3bgpJHNSm1P6D2Dxa2pqSDIelgStoaksw98M4QFkUvhiS9FgqWsddroXBne8ClKczSJMLt6pveJDJjkm32r07OAq3V961BkbYeHFmDZpYHDHf3S1pD1droN62hWl7CkmH2sQ+8VvbmgY+0crA1hpK+PbD00bNdMMnWHErhKWPnSFL7aeIIi6JBIMnasEqhFjFwJWkTtacgwjOGbaY4C80YnmLQZwx5vV0rsN6t7nJCPuSgru8nDcMP6CvS0IB5+kxB7jW+stLKdOpMW4hJ9kmnJO+Hw1uKqvBe0dNJC89ikn0yLMlTorARF4X3GN7fFYlJ8ra33kpM8v6k8PLBvnj4InZ5b5A4Vr5ZJ9J2PR/eOKlBeFuW3CC8LSvUlpuMfC4EOVt8JE88uTfo9eafUO4Nhduv0tvvNO3NFuZ99Jf/NVt4Z3x5/3Ro7Xd535zw/unnVm3y5txbV+FV2+2vvFvcPclnDHXu5aB2d0/iMZE/7cmV9NTaqGsHWr4yDe2n2/uK4StT9bjB8/EhUFod39CHS8vzuUD/gO6p+vAprme5JS3+SntHkuEc0foBPYoelaSDOUk7nNHPnc5MR2zmr5O/8Kt++AvumbVF6GdZ7Z3MWNdaxnsZtrLX5p3C3JRkOTO3tS3z9Q5LP9VewtK7Icl2Qmp5FR2HwPrYr1o75X6xBSX6p63QqqFCvalgvjfU2k2FRLup4LznE24S8pai6pfeNjnO/IEh84VN5Oln57vdFjiEWrtvDBV5r/VhrnI/kf5Gzx9YEhrEa+iYL+Su5rNN2mSwkk31f9xtmtwB7Nb0+a3xCkatZfx2ETVbNL99maeXw7W95vbl4vIb0Ft8ze3LkyQfxOn8Kd5Pm/x7l/r5OH6ap/H1d3G70/0paZBfexcXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+UPvzIty9ynbAUAAAAASUVORK5CYII='/></button> */}
    
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          <img className={MenuHeaderStyle.dotsicon} alt='3dot' src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAdVBMVEX///8AAADw8PCZmZn8/Py5ubmOjo7Dw8OcnJzW1tb29va+vr5UVFTd3d22trbZ2dnNzc0tLS2GhoaAgIDl5eUyMjJHR0cYGBijo6N0dHQ3Nzc9PT0jIyOKioqvr68oKChgYGBsbGwLCwtOTk5jY2MeHh4XFxd25VJEAAADwklEQVR4nO3ai3KiQBCFYRGC4P0eE42Jub3/I65I3LgFPd2N1CZl/d8DnJKx6ZlhptMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3a9TbxGmajfP+lUHJZJDFaZwNJsmVSf18nKVpvOmNrgzqdJbZMPq2mk8bJ03S9UXSOp00TprOVxdJw2zZOKnT6V3+qNJ91mj897NK0mzfJCjJ7itJ616TpKPpcyXrJHYnjeuDorE7Ka4Pem5SW91hfdjRp2/MRisx6dH3HvU+xaRh15VUhIlZhbkjaRNM2jiSFsEkZ6kK1fDX2pz0oCQ9mJOqTeFfmecBUyXsWF/GhvOiJr3bgpJHNSm1P6D2Dxa2pqSDIelgStoaksw98M4QFkUvhiS9FgqWsddroXBne8ClKczSJMLt6pveJDJjkm32r07OAq3V961BkbYeHFmDZpYHDHf3S1pD1droN62hWl7CkmH2sQ+8VvbmgY+0crA1hpK+PbD00bNdMMnWHErhKWPnSFL7aeIIi6JBIMnasEqhFjFwJWkTtacgwjOGbaY4C80YnmLQZwx5vV0rsN6t7nJCPuSgru8nDcMP6CvS0IB5+kxB7jW+stLKdOpMW4hJ9kmnJO+Hw1uKqvBe0dNJC89ikn0yLMlTorARF4X3GN7fFYlJ8ra33kpM8v6k8PLBvnj4InZ5b5A4Vr5ZJ9J2PR/eOKlBeFuW3CC8LSvUlpuMfC4EOVt8JE88uTfo9eafUO4Nhduv0tvvNO3NFuZ99Jf/NVt4Z3x5/3Ro7Xd535zw/unnVm3y5txbV+FV2+2vvFvcPclnDHXu5aB2d0/iMZE/7cmV9NTaqGsHWr4yDe2n2/uK4StT9bjB8/EhUFod39CHS8vzuUD/gO6p+vAprme5JS3+SntHkuEc0foBPYoelaSDOUk7nNHPnc5MR2zmr5O/8Kt++AvumbVF6GdZ7Z3MWNdaxnsZtrLX5p3C3JRkOTO3tS3z9Q5LP9VewtK7Icl2Qmp5FR2HwPrYr1o75X6xBSX6p63QqqFCvalgvjfU2k2FRLup4LznE24S8pai6pfeNjnO/IEh84VN5Oln57vdFjiEWrtvDBV5r/VhrnI/kf5Gzx9YEhrEa+iYL+Su5rNN2mSwkk31f9xtmtwB7Nb0+a3xCkatZfx2ETVbNL99maeXw7W95vbl4vIb0Ft8ze3LkyQfxOn8Kd5Pm/x7l/r5OH6ap/H1d3G70/0paZBfexcXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+UPvzIty9ynbAUAAAAASUVORK5CYII='/>
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Profile</a></li>
            <li><a className="dropdown-item" href="/">My Account</a></li>
            <li><a className="dropdown-item" href="/">Settings</a></li>
          </ul>
        </div>
    
    </div>
  )
}
