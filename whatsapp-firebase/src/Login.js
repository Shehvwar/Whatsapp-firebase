import { Button } from '@material-ui/core'
import React from 'react'
import './Login.css'
import {auth, provider} from './frebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'

function Login() {
const [{user}, dispatch] =  useStateValue();

    const signIn = () =>
    {
        auth
        .signInWithPopup(provider)
        .then((result) => {
            dispatch({
                type:actionTypes.SET_USER,
                user:result.user,
            })
        })
        . catch((error) => alert(error.message));
    };
    return (
        <div className = "login">
            <div className = "login__container">
                <img src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEBAPEBAPEBAPDg8QEBAODw8NEA8OFREWFhURFhUYHSggGBolGxcVITEhJikrLi4uFx8zODMsNygwLisBCgoKDg0OGhAQGC0iHyAtLS0rLystLS0rKy0tLS0tLS0tKy0tLS0tLS0rLSsrLS0tLS0rLS0rLS0tLS0tLS0tLf/AABEIAOEA4QMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQIDBgcFBP/EAEAQAAIBAgEJBAcGBAYDAAAAAAABAgMRBAUGEiExQVFxgRNhkaEiMlKCscHRQlNicpLwIzOy4QcUY3PC8YOjs//EABoBAQACAwEAAAAAAAAAAAAAAAAEBQECAwb/xAA0EQEAAgECBAIIBQQDAQAAAAAAAQIDBBESITFRBUETIjJhcYGRsSNCodHhUsHw8RUzQxT/2gAMAwEAAhEDEQA/AO4gAAAAAAAAAACLgVdVcQI7TufgwGm/ZfkA037L8gHadz8GAVVcQLpgSAAAAAAAAAAAAAAAAAAAAABSVRc3wWsCLSfd5sCVSW+75gWSS2ICQAAABDQFXSW7Vy1ARoyWx356mAVTc9T7wLpgSAAAAAAAAAAAAAAAArKaQFdFvbqXDeBeMUtgEgAAAAAAAAAACGr7QMbg16vg/qBaFS+rY+DAuAAAAAAAAAAAAADHKe5bfgBMIW17XxAuAAxYjEwprSqTjBcZNL/sxa0V5zLW161je07PCxmddKOqlCVR+1L+HH6+RGvqqx7PNByeIUj2Y3eRiM5MVPZKNNfgim/GVyPbVXnpyRL67LbpyfBVx9aXrVar/wDJK3hexynJeesy4WzZLdbT9Xzt32tvm2zXeXPinuJmN5N5ZqeMqx9WrVjyqTS8Lm8ZLR0mW8ZskdLT9X34fOLFQ+2prhUin5qzOldTkjz3d6a3NXz3+L1sJnZF6qtNx/FTemuqeteZ3rq4/NCXj8QrPtxs93B42lWV6c4z42etc1tRKretukp1MlLxvWd30GzcArOCf13oCik1qfR7mBlTAAAAAAAAAAAGOUm3ZdXwAtGNtSAkCKk1FOUmkkrtt2SXFsxM7dWJmIjeWs5Uzp2ww6vxqyWr3Y7+b8CJk1W3Kiuz6+I5Y/q1mvXnUlpTlKcuMnfouCIVrTad5lWXva872ndQw1AFwAAAAuAuBNObi1KLcZLZKLcWuqMxMxO8M1tNZ3iWw5LzplG0a604/eRVpLmt/TzJePVTHK6ww6+Y5ZPq2rD14VIqcJKUXscXdE2LRaN4WlbRaN6zuyGWw1fUwMSbi7PZufyAypgSAAAAAAABjnLctr8u8C0Y2AkD58fjadCDqVHZbEtspS9lLezS94pG8ueTLXHXis0XK+V6mIfpejTT9GmnqXe+LK3Lmtk+Ckz6m2We0dnnnJGLgLgAFwFwFwFwFwAC4C4H15NyjUw8tKm9T9aD9Wa71x7zpjy2pO8O2HPfFO9W9ZKypTxENKGqS9eD9aD+a7yyx5YvG8LzDnrlrvD7To7IavqApF2dn0fFAZQAAAAAAVnKyAiEbbdr2/QCwHz4/GwoU5VJuyWxLbKW6K7zW94pG8ueTJXHXis59lLKFTETc58oxWyEeC+pVZMk3neVDmzWy23l8po4gAAAAAAAAAAAAAAGXCYqdKaqU3aUfBrfFrejal5rO8N8eS2O3FV0DJGU4Ymnpx1SWqcN8ZfNcGWmLJF43hf4M9ctd4+b7jo7KzjdfDuYEUpbntW0DIAAAAAGJa33L4gZAIlJJNtpJJtt6kkt4YmdubnuXsqvE1Lq6pQuqcdmrfN97KvNl47e5Q6rUelty6R0ebc4oxcMFwy+pZOxDV1QrW/2p/Q39HftLr6DL/TP0YKtKUHozjKD22nFxduTNZrMdYc7VtWdpjZS5hguAuAuAuAuAuAuAuGC4ZLgfXkvKE8PUVSOtbJx3ThvX0N8eSaW3h1wZpxX4o+bouGxEakI1IO8ZpNPu+pbVtFo3h6GlotWLR0llMtmOpqel0f1AyJgSAAAUqysv3tAQVlb93AsBrGeeU9GKw8XrmtKpbdDdHq/Jd5E1WTaOGPNW+IZ+GPRx59fg08gKguAA3nNvIaoxVWok60ldJ6+yXBfi4vpzscGDgjeeq70mljHHFb2vs94kpzys5MnqvQlZXqU050+N1tj1WrwOOfHx096Nq8PpMc946OeKRVvPpuAAALgDAGQAXAGAMgBsuZuUtGbw8n6M7yp33T3x6rXzXeS9Lk2nglZeH59p9HPn0bkT1uhq+oClF7ntWoDKAAAYnrly19dwFwKVqqhGU5O0Yxcm+CSuzEztG8sWmKxvLmONxUq1SdWW2cm7cFuj0Vl0Ki9ptaZl5rLknJebT5sFzRzTcD3M0MCqtfTkrxopT5zbtH5voiTpqcV958k7QYuPJxT0hvhZLwAAc2zhwXYYmpBK0ZPtIfllu6O66FVnpw3mHn9Xi9HlmPKebz7nFFTcCLhkuGE3Ai4C4C4C4C4C4ZWhUcWpRdpRalF8JJ3TMxMxO8MxaazvDpuTcWq1KnVX24ptcJbJLo7lvS3FWJekxZIyUi0eb6Td0Y5apJ8dXUDMgAEMDHT3vi/JAXA8DPTF6GHVNba01H3Frl8l1I2qvtTbug+IZOHFt3aJcrVGXAXA3bMSmuxqy3yrW6RhH6ssNJHqzPvXPhsfhzPvbKS1iAANaz3wOnRjWS9KjK0v9uWp+Dt5kXVU3rxdlf4hi4qcceX2aSmVylLgLgLgLgLgLgLgLgLgLgLgbhmLi7xq0H9lqpHk9Ul4pfqJ+kvymq38NybxNO3NtRMWalZauWvwAvB6gLAVqOyArBalyAsBoufGI0sRCG6nSX6pO78lErtXbe0R2UviV98kV7R92u3IquLgLgbvmHVTo1Y741r9JQjb4MsNJPqzHvXXhtvw5j3tmJaxAAHjZ2Y2NLC1E7OVaLpQXHSVm+iu/A46i8VpPvRdZkimKd/Pk50mVTz6bhguAuAuAuAuAuAuAuAuAuB6+amI0MXT4T0qb6q680jvprbZI96Zob8OaPfydFLRfjApQeoDKBjr7ALAAOZ5x1dLF4h8Kmj+mKj8ipzzvkl53V23zWecckYuAA9/MnG9niHTb1Vo6K/PHXHy0l1RK0t9r7d0/w/Jw5OGfNv5YrwAwY7Fwo051Zu0YK7trb3JLvbsupra0VjeWmS8UrNp6Q5jlfKc8VVdSepbIQ2qEOHPiyryZJvO8vPZ885bcU/J8qOTgm4C4C4C4C4C4ABcBcBcBcDNgquhVpT9irTl4TTNqTtaJb4rcN6z74dXLl6hAFKO1/mYGYDFW3c18QLAAOVZUlevXfHEVv/AKMp8ntz8ZeYzz+Lb4z93y3NHIuAuBaFRxalF2lFqUWt0k7pmYnad4bVtNZ3jydSyNlGOJowqrU2rTj7NRetH97mi3x3i9d3pMGWMtItD7Td2fPlDBxr0p0ZerUja62p7VJcnZ9DW9YtWYlpkxxkrNZ83K8XhZ0ak6U1aUHZ8Hwa7mtZUXrNZ2l5rJScdprbyYrmrQuAuAuAuAuGC4ZLhguAuAuGS4YRJ6nyDLsCd0nxRdvVgFKfrS5r4IDMBirbua+IFgAHKMqq2IrrhiKy/wDYynye3Pxl5jPyy2+M/d81zRyLgLgAPXzYyz/lavpP+DUsqn4XuqdN/dyR3wZeC3PpKZo9R6K+09J6/u6UnfWtjLR6BIGv52ZD/wAxDtKa/jU1qX3kNuhz3r+5H1GHjjeOsIWs0vpa8Vfaj9fc553PU1qaepp8CsUCbgAFwAC4C4C4C4C4C4C4ES2MDsKVtXAu3rAClP1pc/kgMwGKvsAsAA5hnPT0MZiFxmpL3oqXxbKnURtkl5zWV4c9nmXOSKXAXAXAhhlueZOXbpYSq9aX8CT3r7vmt3huJ2mzfkn5LfQarf8ACt8v2bkTVqAavnRmz2169BJVds4bFV7+6XxIufT8XrV6q7WaL0nr06/f+WiTTi3GScZRdmpJpp8GtxXTGykmJidpRcMFwFwy2KnmdipU1O9NSav2UnJSS4N2tfuJMaS8xunx4dlmu+8b9niY3B1aMtGrTlB7tJapcnsfQ4Wpas7WhDyYr452tGzBc1cy4C4C4C4GfJ1PTrUYe3Wpx6Oav5G2ON7RHvdcNeLJWPfDrZcvUAFKO182BmArUWoClN6lyAkDQ8/8Po16dTdUpW96D1+Uolfq67Wie6k8Tptki3ePs1i5EVpcBcBcBcCLta02mndNammtjTDMTs6JmnnEsRFUarSrxW3YqsV9pfi4rryssGfjjaeq90erjLHDb2vu2Mkp4B5GXM36OKV5ehVSsqsVr5SX2kccuGuTr1RdRpaZuvKe7Q8rZBxOGu5w0qf3tO8oW798epX5MN6deilzaTJi6xvHeHmXOSM27MzIOm1iqq9FO9GL+0/vH3Ld48CZpsO/r2+S10Gl3/Fv8v3/AGbwT1wx16EKkXCcYzi9sZJST6MxMRMbS1tWLRtaN2q5VzKhK8sNLs393NuUHyltj5kTJpInnXkrs3htZ545293k1DH4CtQlo1qcoPc3rjLlJamQr0tSdrQqsuG+Odrxs+a5q5FwAHt5m4ftMZTe6lGdR9Forzkjvpq75Pgm6CnFmie3N0ktHoENgRh1qAygQwMVPeuD8n+2BYDX8+MF2mFc161CSqe5sl5O/ukbVU4qb9kHxDHx4d48ubnVysefLgLgLgLgLgITcWpRbjKLTjKLs01saZmJ25w2i0xO8Og5sZ0xr6NGu1GvsjLZGty4S7t+7grHBqIvyt1Xmk1sZPVvyt92zkpYAADycTm1g6k9OVGOle70HKnGXOMXZnG2DHM7zCNfR4bW4pq9WKSSSSSSsktSS4HZJSAAAeDnvb/JVb+1S0e6XaR+Vzhqf+uUPX7egnf3fdzRMqnnk3DBcDef8PsHanVrtfzJKEfyQ2vrJ290sNJTas27rrwzHtSbz5/2bYTFopVeq3HUBlgtQFgAGGWqSfHV9ALAVqU1KLjJXjJOLT3pqzRiY35MTETG0uSZTwUsPWqUZfYlZP2obYy6qxT5KcFpq8vmxTivNJ8nymjkXAXAXAXAAQzJu2rN/PKdK1PE6VSmtSqr0qkF+L2l37eZLxaqY5WWmm8Qmvq5Ocd/P+fu3vCYunWgqlKcZweyUXfo+D7ifW0WjeFxS9bxvWd4ZjLYAAAAADTf8RsclClh0/SnLtJLhCKaV+bb/SyHq78oqq/E8m1Yp35tGRXqVNwMlCjKpONOCvOclGK/E3bwM1rNp2htSs3tFY6y65k/CRo0qdKOynBRvxe+XV3fUuaVitYiPJ6nHSMdIrHkzmzdR65JcPiwMyAkABjqxugKwldfvaBYDVM+8k9pTWJgvToq1RL7VHbf3Xr5NkTVYuKOKPJW+I6fjr6SOsdfh/DQblcoi4C4C4C4C4C4BhllwWNq0JadGpKnLe4vU+5rY1zN63tWd4l0x5b453rOza8m5+yVo4mlpL7yjqfWD1Po1yJdNX/VCyxeJz0yV+cfs2nJ2X8JXsqdaGk/sTfZz/TLb0JVMtLdJWOPU4sns2emdHcAAa/nBnXQwycINVa+zQi/Rg/xtbOW3ltOGXUVpyjnKFqNbTFyjnP+dXNsXi6lapKrUlpTm7t/BJbkuBW2tNp3lQ5Mlr2m1p5yoaOZcDc8wck3bxc1qV4UU972Sn/xXvE7SYvzz8lv4bp//Wfl+/8AZuxOXCG7awIox3va9YGYAAAMDAtUnwtfqBcDBj8RGnSqVJWcYU5yaexpRbt1NbTtWZlpktFaTafKHGo7CleTSAAXAAAAAABAEONwPtwmV8VR1U69WKWyOk5RXuyujpXLevSXemoy09m0vQWeOPtbtYvvdKnf4HT/AOnJ3d/+Qz9/0fJjM4MZWTjOvU0XtjDRpJ9z0Urmts17dZcr6vNflNv7PMjE5I66MMFwPTzfyRLF1lBXVONpVZr7MOC/E93V7jrhxTktt5JOl085r7eXm6pQpRhGMIJRjCKjGK2KKVki2iIiNoelrWKxER0hkMssctbtw1v5IDPFASAAAGBgjvff8ALAa5n7i+zwjgttapGHur0pf026kbVW2x7d0DxHJw4du/Jze5WPPFwIuGS4E3Ai4YTcMlwwi4ZLgAAAAAAXA+3JWTauJqKlSWvbKT9WnH2pfTeb48c3naHXDhtmtw1/06lkjJlPC0lSprZrlJ+tOe+T/eotseOKV2h6TBhrhpw1/wBvtN3ZE5W57gJowsBlAAAAFKkrJgUirJASBz7/ABFxelXpUlspUnJ/mm/pGPiV2stvaI7KPxTJvkivaPu1MiKsAAAAAAAAAAAC4AAAuB6uQcg1sXL0Fo0k7TqyXorio+1Lu8bHbFhtkn3JWm0t888uUd3TMk5LpYWmqdKNltlJ65Tl7Unv+RZ0x1pG0PQYcFMNeGsfy+w3diTtrArTjd3fTuQGcAAAAAMVbcuLAAAOO5cxqrYmvVvqnVko69sF6MPJIp8tuK8y8rqMnHltbvP8Qy4LIWMreph6lvamuyjzvK1+hmuHJbpDbHpM1+lZ+fL7vdweYVeVnWrU6a4U1KrK3N2S8zvXR2/NKZj8KvPt2iPhz/Z7uDzLwdOzkp1n/qTaX6Y2Xid66XHHXmm4/DsNesb/ABfJlvMmnO88K1Sn93K7pS5b4ea7jXLpYnnXk5ajw2tuePlPby/hpGUMn1sPLRrU5U29jeuMvyyWpkG+O1J9aFPlw3xTteNnzXNHMuAuAuAuAuAuAuBmweFq1paFKEqkuEFe3e3sS72bVra07RDfHjvknakby3PImY6Vp4uSk9qo029H3pb+S8WTcWk253W2n8MiOeX6R/dudKnGMVGMVGMVaMYpRjFcElsJkRtyhbRERG0LGWUSdtoFYxcnd9EBnSAkAAAAAML1y5L4gSBEldNPercAPkwOS8PQ/k0adPvjBKXWW1mlaVr0hyx4ceP2KxD7Dd1AAAClWlGcXGcYyi9sZJSi+aZiYieUsTETG0tcyhmThKl3T06Ev9N6UP0y+TRHvpaW6ckDL4bhvzr6vw/Zr+LzExUf5c6VVd96MvB3XmR7aO8dJ3Qb+F5Y9mYn9HlV83MdDbhqr/Jo1f6WzjODJHkjW0eevWk/d8csn4hbcPiFzoVV8jT0d+0/RxnDkj8k/SSOAxD2UMQ+VCq/kPR27T9D0OT+mfpL6qOb+Nn6uGre/Hsv67G8YMk/lda6TPbpSft93qYTMbGT9d0qS75OpLwjq8zrXSXnrySaeGZp9qYj9Xv5PzGw0LOrKdd8H/Cp/pWvxZIppKR15puLwzFXnaeL9I/z5tlw2Gp0oqFOEKcVsjCKivBEmKxEbQsK0rSNqxtDKZbAFZTtz4AIQb1v+yAzJASAAAAAEMDDDjxdwLAAAACrmlv+oEdp3P4ATGSez+4FgAAAAAAAAAABEpJbQK3b2alxe0C9OlYDKAAAAAAABjrPUBVIA5JbWBXtOCb8gHpPgvMCeyb2tsC8aSQFtFAUnSTAo4yXfz+oDT4przAlSXFAWAAAAFXJLegI7RbrvoA9J93mwLRo/t6wMqQEgAAAAAAAAKVI3Ax9k3tb+HwAtGikBdRQFrAAAAAAAhxQFJUkwK9gv+tQDse9+LAdi+MvFgOw6822BKooC6ggLWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//Z"/>
                <div className = "login__text">
                    <h1>Sign In To Whatsapp</h1>
                </div>
                <Button onClick = {signIn} >Sign In With Google</Button>

            </div>
        </div>
    )
}

export default Login
