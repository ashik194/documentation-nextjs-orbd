import { role, sessionStatus } from '../app/utils/session'
import { redirect } from 'next/navigation'

export default function Home() {
  if(!sessionStatus){
    return redirect("/login")
}else{

    if ( sessionStatus && role === "clients") {
      return redirect('/clients')
    }else if(sessionStatus && role === "admin"){
        return redirect('/admin')
    }
}

}
