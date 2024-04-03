
import { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import { role, sessionStatus } from './app/utils/session'
 
export function middleware(request) {
//   const url = request.nextUrl.clone()
//   url.pathname = '/dest'
//   return NextResponse.rewrite(url)
    console.log("Testing")
    if(!sessionStatus){
        return NextResponse.redirect(new URL("/login",request.url))
    }else{

        if ( sessionStatus && role === "clients" &&
            !request.nextUrl.pathname.startsWith("/clients") &&
            !request.nextUrl.pathname.startsWith("/clients/sso") &&
            !request.nextUrl.pathname.startsWith("/clients/api")
        ) {
            return NextResponse.redirect(new URL("/clients", request.url));
        }else if(sessionStatus && role === "admin" &&
            !request.nextUrl.pathname.startsWith("/admin")
        ){
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }
    // return NextResponse.next()
}

export const config = {
    matcher: ["/clients","/clients/sso","/clients/api","/admin"]
}