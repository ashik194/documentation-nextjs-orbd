// import { sessionStatus } from "./app/utils/session";
// import { NextRequest, NextResponse } from "next/server";


// const protectedRoutes = ["/client/sso","/client/api"];

// export function middleware(request){
//     // if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)){
//     //     const absoluteURL = new URL("/login", req.nextUrl.origin)
//     //     return NextResponse.redirect(absoluteURL.toString())
//     // }
//     console.log("middleware")
//     // if(!sessionStatus){
//     //     return NextResponse.redirect(new URL("/login",request.url))
//     // }

//     // return NextResponse.next()
// }
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { sessionStatus } from './app/utils/session'
 
export function middleware(request) {
//   const url = request.nextUrl.clone()
//   url.pathname = '/dest'
//   return NextResponse.rewrite(url)
console.log("Testing")
    if(!sessionStatus){
        return NextResponse.redirect(new URL("/auth/login",request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/clients/sso","/clients/api"]
}