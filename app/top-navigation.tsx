'use client'
import {signIn, signOut, useSession} from "next-auth/react"
import Link from 'next/link'
import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


function AuthButton(){
  //get session
  const {data: session } = useSession();
  //if we have session
  if(session){
    return (
      <>
        <div className={navigationMenuTriggerStyle()}>
           {session?.user?.name}
        </div>
        
        <Avatar>
          <AvatarImage src={session?.user?.image ?? ""}/>
        </Avatar>

        {/* <button  onClick={()=>signOut()}>Sign Out</button> */}
        <Button onClick={()=>signOut()}>Sign Out</Button>
      </>
    )
  }

  //if not signed in
  return (
    <>

      <Button onClick={()=>signIn()}>Sign In</Button>
    </>
  )
}

export default function TopNavigation() {
  return (
    <div className="flex justify-center">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/protected" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Protected
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/feed" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Feed
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/demo" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Demo
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <AuthButton />

        </NavigationMenuList>
      </NavigationMenu>

    </div>
  )
}
