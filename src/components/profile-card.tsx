import { useState } from "react"
import { format } from "date-fns"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CalendarIcon, Lock } from "lucide-react"
import { useForm, FormProvider } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { User } from "@/types/user"
import { Label } from "@radix-ui/react-dropdown-menu"
import { Input } from "./ui/input"
import { useUpdateUser } from "@/hooks/use-update-user"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import { Calendar } from "./ui/calendar"
// Validation schemas
const profileSchema = z.object({
  name: z.string().min(1, "Name is required"),
  surname: z.string().min(1, "Surname is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  dob: z.date().min(new Date(8.64e15), "Date of birth is required"),
})

const passwordSchema = z.object({
  currentPassword: z.string().min(6, "Current password is required"),
  newPassword: z.string().min(6, "New password must be at least 6 characters"),
})
type ProfileCardProps = {
  user:User | undefined
}
export default function ProfileCard({ user }:ProfileCardProps) {
  const profileForm = useForm({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
    defaultValues: { ...user,  dob:user ? new Date(user.dob) : new Date() },
  })

  const {mutate: UpdateUser} = useUpdateUser()

  const passwordForm = useForm({
    resolver: zodResolver(passwordSchema),
    mode: "onChange",
  })

  const [isPasswordDialogOpen, setIsPasswordDialogOpen] = useState(false)

  const handleSaveProfile = () => {
    const userData = profileForm.getValues()
    UpdateUser(userData)
    // Call API to save profile
  }

  const handleUpdatePassword = (data:any) => {
    console.log("Password update data:", data)
    // Call API to update password
    setIsPasswordDialogOpen(false)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Profile Information</CardTitle>
      </CardHeader>
      <CardContent>
        <FormProvider {...profileForm}>
          <form className="space-y-4" onSubmit={profileForm.handleSubmit(handleSaveProfile)}>
          <div className="grid grid-cols-2 gap-4">          

              <FormField
                name="name"
                control={profileForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input className="input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                name="surname"
                control={profileForm.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Surname</FormLabel>
                    <FormControl>
                      <Input className="input" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          <div className="space-y-2">
            <Label >Role</Label>
            <Input id="role" defaultValue={user?.role} readOnly />
          </div>
            <FormField
              name="email"
              control={profileForm.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" className="input" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
                control={profileForm.control}
                name="dob"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Date of birth</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-[240px] pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date > new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
        />
          </form>
        </FormProvider>
      </CardContent>
      <CardFooter className="flex justify-end space-x-4">
        <Dialog open={isPasswordDialogOpen} onOpenChange={setIsPasswordDialogOpen}>
          <DialogTrigger asChild>
            <Button variant="outline">Update Password</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Update Password</DialogTitle>
              <DialogDescription>Enter your current and new passwords to update.</DialogDescription>
            </DialogHeader>
            <FormProvider {...passwordForm}>
              <form onSubmit={passwordForm.handleSubmit(handleUpdatePassword)}>
                <FormField
                  name="currentPassword"
                  control={passwordForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Current Password</FormLabel>
                      <FormControl>
                        <input type="password" className="input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="newPassword"
                  control={passwordForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <input type="password" className="input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name="confirmPassword"
                  control={passwordForm.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl>
                        <input type="password" className="input" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">
                    <Lock className="mr-2" />
                    Update Password
                  </Button>
                </DialogFooter>
              </form>
            </FormProvider>
          </DialogContent>
        </Dialog>
        <Button onClick={profileForm.handleSubmit(handleSaveProfile)}>Save</Button>
      </CardFooter>
    </Card>
  )
}
