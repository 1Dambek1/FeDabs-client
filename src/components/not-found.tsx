import { Link } from "@tanstack/react-router"
import { FrownIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card"

export const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <Card className="w-[380px]">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FrownIcon className="w-6 h-6" />
            <span>404 - Page Not Found</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </CardContent>
        <CardFooter>
          <Button asChild className="w-full">
            <Link to="/profile">Go to Profile</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
