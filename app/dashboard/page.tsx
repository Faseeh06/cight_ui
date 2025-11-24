"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"

type Section = "profile" | "passwords" | "history" | "settings"

export default function DashboardPage() {
  const router = useRouter()
  const [activeSection, setActiveSection] = useState<Section>("profile")

  const handleLogout = () => {
    router.push("/login")
  }

  const handleLaunch = () => {
    router.push("/")
  }

  return (
    <div className="min-h-screen bg-[#F7F5F3] flex">
      {/* Sidebar */}
      <aside className="w-72 bg-white border-r border-[rgba(55,50,47,0.12)] flex flex-col shadow-sm">
        {/* Logo & Status */}
        <div className="p-6 border-b border-[rgba(55,50,47,0.12)] space-y-3">
          <h1 className="text-[#2F3037] text-2xl font-medium font-sans">Cight</h1>
          <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1.5"></span>
            Active
          </Badge>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          <button
            onClick={() => setActiveSection("profile")}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium font-sans transition-all flex items-center gap-3 ${
              activeSection === "profile"
                ? "bg-[#2F3037] text-white shadow-sm"
                : "text-[rgba(55,50,47,0.80)] hover:bg-[#F7F5F3]"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            Profile
          </button>
          <button
            onClick={() => setActiveSection("passwords")}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium font-sans transition-all flex items-center gap-3 ${
              activeSection === "passwords"
                ? "bg-[#2F3037] text-white shadow-sm"
                : "text-[rgba(55,50,47,0.80)] hover:bg-[#F7F5F3]"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Passwords
          </button>
          <button
            onClick={() => setActiveSection("history")}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium font-sans transition-all flex items-center gap-3 ${
              activeSection === "history"
                ? "bg-[#2F3037] text-white shadow-sm"
                : "text-[rgba(55,50,47,0.80)] hover:bg-[#F7F5F3]"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            History
          </button>
          <button
            onClick={() => setActiveSection("settings")}
            className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium font-sans transition-all flex items-center gap-3 ${
              activeSection === "settings"
                ? "bg-[#2F3037] text-white shadow-sm"
                : "text-[rgba(55,50,47,0.80)] hover:bg-[#F7F5F3]"
            }`}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Settings
          </button>
        </nav>

        {/* Launch & Logout */}
        <div className="p-4 border-t border-[rgba(55,50,47,0.12)] space-y-2">
          <Button
            onClick={handleLaunch}
            className="w-full bg-[#2F3037] text-white hover:bg-[#1f2026] shadow-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            Launch Cight
          </Button>
          <Button
            onClick={handleLogout}
            variant="outline"
            className="w-full border-[rgba(55,50,47,0.12)] text-[#2F3037] hover:bg-[#F7F5F3]"
          >
            Log out
          </Button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-5xl mx-auto">
          {activeSection === "profile" && <ProfileSection />}
          {activeSection === "passwords" && <PasswordsSection />}
          {activeSection === "history" && <HistorySection />}
          {activeSection === "settings" && <SettingsSection />}
        </div>
      </main>
    </div>
  )
}

function ProfileSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[#2F3037] text-3xl font-medium font-sans">Profile</h2>
        <p className="text-[rgba(55,50,47,0.80)] text-sm font-sans mt-2">
          Manage your account information and preferences
        </p>
      </div>
      
      <Card className="bg-white border-[rgba(55,50,47,0.12)]">
        <CardHeader>
          <CardTitle className="text-[#2F3037] font-sans">Personal Information</CardTitle>
          <CardDescription className="text-[rgba(55,50,47,0.80)] font-sans">
            Update your personal details here
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center gap-6">
            <Avatar className="w-20 h-20">
              <AvatarImage src="" />
              <AvatarFallback className="bg-gradient-to-br from-purple-500 to-pink-500 text-white text-2xl font-medium">
                U
              </AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <Button variant="outline" size="sm" className="border-[rgba(55,50,47,0.12)]">
                Change Avatar
              </Button>
              <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">JPG, PNG or GIF. Max 2MB.</p>
            </div>
          </div>

          <Separator />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-[#2F3037] font-sans">First Name</Label>
              <Input
                id="firstName"
                placeholder="John"
                className="border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] focus:bg-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-[#2F3037] font-sans">Last Name</Label>
              <Input
                id="lastName"
                placeholder="Doe"
                className="border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] focus:bg-white"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-[#2F3037] font-sans">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              className="border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] focus:bg-white"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-[#2F3037] font-sans">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+1 (555) 000-0000"
              className="border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] focus:bg-white"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button className="bg-[#2F3037] text-white hover:bg-[#1f2026]">
              Save Changes
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function PasswordsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[#2F3037] text-3xl font-medium font-sans">Security</h2>
        <p className="text-[rgba(55,50,47,0.80)] text-sm font-sans mt-2">
          Manage your password and security settings
        </p>
      </div>
      
      <Card className="bg-white border-[rgba(55,50,47,0.12)]">
        <CardHeader>
          <CardTitle className="text-[#2F3037] font-sans">Change Password</CardTitle>
          <CardDescription className="text-[rgba(55,50,47,0.80)] font-sans">
            Ensure your password is strong and secure
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="currentPassword" className="text-[#2F3037] font-sans">Current Password</Label>
            <Input
              id="currentPassword"
              type="password"
              placeholder="Enter your current password"
              className="border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] focus:bg-white"
            />
          </div>

          <Separator />

          <div className="space-y-2">
            <Label htmlFor="newPassword" className="text-[#2F3037] font-sans">New Password</Label>
            <Input
              id="newPassword"
              type="password"
              placeholder="Enter new password"
              className="border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] focus:bg-white"
            />
            <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
              Must be at least 8 characters with a mix of letters, numbers, and symbols.
            </p>
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword" className="text-[#2F3037] font-sans">Confirm New Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Confirm new password"
              className="border-[rgba(55,50,47,0.12)] bg-[#F7F5F3] focus:bg-white"
            />
          </div>

          <div className="flex justify-end pt-4">
            <Button className="bg-[#2F3037] text-white hover:bg-[#1f2026]">
              Update Password
            </Button>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-[rgba(55,50,47,0.12)]">
        <CardHeader>
          <CardTitle className="text-[#2F3037] font-sans">Two-Factor Authentication</CardTitle>
          <CardDescription className="text-[rgba(55,50,47,0.80)] font-sans">
            Add an extra layer of security to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#2F3037] font-sans">Enable 2FA</p>
              <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
                Require a verification code in addition to your password
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function HistorySection() {
  const historyItems = [
    { date: "2024-01-15", action: "Launched Cight", time: "10:30 AM", type: "launch" },
    { date: "2024-01-14", action: "Updated profile information", time: "3:45 PM", type: "update" },
    { date: "2024-01-14", action: "Changed password", time: "3:40 PM", type: "security" },
    { date: "2024-01-13", action: "Logged in from new device", time: "11:20 AM", type: "login" },
    { date: "2024-01-12", action: "Launched Cight", time: "9:15 AM", type: "launch" },
    { date: "2024-01-11", action: "Updated settings", time: "2:00 PM", type: "update" },
    { date: "2024-01-10", action: "Logged in", time: "4:25 PM", type: "login" },
  ]

  const getTypeColor = (type: string) => {
    switch (type) {
      case "launch": return "bg-blue-50 text-blue-700 border-blue-200"
      case "update": return "bg-green-50 text-green-700 border-green-200"
      case "security": return "bg-orange-50 text-orange-700 border-orange-200"
      case "login": return "bg-purple-50 text-purple-700 border-purple-200"
      default: return "bg-gray-50 text-gray-700 border-gray-200"
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[#2F3037] text-3xl font-medium font-sans">Activity History</h2>
        <p className="text-[rgba(55,50,47,0.80)] text-sm font-sans mt-2">
          View your recent account activity and actions
        </p>
      </div>
      
      <Card className="bg-white border-[rgba(55,50,47,0.12)]">
        <CardContent className="p-0">
          <div className="divide-y divide-[rgba(55,50,47,0.12)]">
            {historyItems.map((item, index) => (
              <div key={index} className="p-4 hover:bg-[#F7F5F3]/50 transition">
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-[#2F3037] text-sm font-medium font-sans">{item.action}</p>
                      <Badge variant="outline" className={`text-xs ${getTypeColor(item.type)}`}>
                        {item.type}
                      </Badge>
                    </div>
                    <p className="text-[rgba(55,50,47,0.60)] text-xs font-sans">{item.date}</p>
                  </div>
                  <p className="text-[rgba(55,50,47,0.80)] text-sm font-sans whitespace-nowrap">{item.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function SettingsSection() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-[#2F3037] text-3xl font-medium font-sans">Settings</h2>
        <p className="text-[rgba(55,50,47,0.80)] text-sm font-sans mt-2">
          Customize your Cight experience
        </p>
      </div>
      
      <Card className="bg-white border-[rgba(55,50,47,0.12)]">
        <CardHeader>
          <CardTitle className="text-[#2F3037] font-sans">Notifications</CardTitle>
          <CardDescription className="text-[rgba(55,50,47,0.80)] font-sans">
            Choose what updates you want to receive
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#2F3037] font-sans">Email Notifications</p>
              <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
                Receive email updates about your account activity
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#2F3037] font-sans">Browser Notifications</p>
              <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
                Get notified in your browser for important updates
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-[rgba(55,50,47,0.12)]">
        <CardHeader>
          <CardTitle className="text-[#2F3037] font-sans">Preferences</CardTitle>
          <CardDescription className="text-[rgba(55,50,47,0.80)] font-sans">
            Adjust how Cight works for you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#2F3037] font-sans">Auto-save Transcripts</p>
              <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
                Automatically save your speech transcripts to history
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#2F3037] font-sans">Dark Mode</p>
              <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
                Use dark theme throughout the interface
              </p>
            </div>
            <Switch />
          </div>

          <Separator />

          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <p className="text-sm font-medium text-[#2F3037] font-sans">High Contrast Mode</p>
              <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
                Increase contrast for better readability
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="bg-white border-red-100 border-2">
        <CardHeader>
          <CardTitle className="text-red-600 font-sans">Danger Zone</CardTitle>
          <CardDescription className="text-[rgba(55,50,47,0.80)] font-sans">
            Irreversible actions for your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <p className="text-sm font-medium text-[#2F3037] font-sans">Delete Account</p>
                <p className="text-xs text-[rgba(55,50,47,0.60)] font-sans">
                  Permanently delete your account and all associated data
                </p>
              </div>
              <Button variant="destructive" size="sm">
                Delete
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
