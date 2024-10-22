import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from "lucide-react"
 
import { Button } from "@/components/ui/button"

const Home = () => {
  return (<>
  <Link to='/todo'>
  <span>CLICK HERE TO SEE AYUSH PATEL ASSESSMENT 😁 </span>
  <Button variant="outline" size="icon">
      <ChevronRight className="h-4 w-4" />
    </Button>
  </Link>
  </>
    
    
  )
}

export default Home