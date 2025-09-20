import { AppLayout } from "@/components/layout/AppLayout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar,
  Settings,
  Bell,
  Shield,
  LogOut,
  Edit,
  Award,
  BookOpen,
  GraduationCap,
  Star
} from "lucide-react";

const achievements = [
  { id: 1, title: "Perfect Attendance", description: "100% attendance for a month", icon: Award, earned: true },
  { id: 2, title: "Task Master", description: "Completed 50 tasks", icon: Star, earned: true },
  { id: 3, title: "Early Bird", description: "Consistently on time", icon: Calendar, earned: true },
  { id: 4, title: "Study Streak", description: "7 days of continuous study", icon: BookOpen, earned: false },
];

export default function Profile() {
  return (
    <AppLayout>
      <div className="p-4 space-y-6">
        {/* Profile Header */}
        <Card className="border-0 shadow-md">
          <CardContent className="p-6">
            <div className="flex items-start gap-6">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarImage src="/placeholder.svg" alt="Profile picture" />
                  <AvatarFallback className="text-lg font-semibold bg-primary text-primary-foreground">
                    AS
                  </AvatarFallback>
                </Avatar>
                <Button 
                  size="icon-sm" 
                  variant="floating" 
                  className="absolute -bottom-1 -right-1"
                >
                  <Edit size={12} />
                </Button>
              </div>
              <div className="flex-1 space-y-3">
                <div>
                  <h1 className="text-xl font-bold text-foreground">Alex Smith</h1>
                  <p className="text-muted-foreground">Computer Science Student</p>
                </div>
                <div className="flex items-center gap-4">
                  <Badge className="bg-primary/20 text-primary">
                    <GraduationCap className="w-3 h-3 mr-1" />
                    Senior
                  </Badge>
                  <Badge variant="outline">Student ID: CS2024001</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <Card className="border-0 bg-surface">
            <CardContent className="p-4 text-center">
              <div className="text-lg font-bold text-primary">91%</div>
              <div className="text-xs text-muted-foreground">Attendance</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-surface">
            <CardContent className="p-4 text-center">
              <div className="text-lg font-bold text-success">142</div>
              <div className="text-xs text-muted-foreground">Tasks Done</div>
            </CardContent>
          </Card>
          <Card className="border-0 bg-surface">
            <CardContent className="p-4 text-center">
              <div className="text-lg font-bold text-warning">3</div>
              <div className="text-xs text-muted-foreground">Achievements</div>
            </CardContent>
          </Card>
        </div>

        {/* Personal Information */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-primary" />
                <CardTitle className="text-lg">Personal Information</CardTitle>
              </div>
              <Button variant="ghost" size="sm">
                <Edit className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium text-foreground">alex.smith@university.edu</div>
                  <div className="text-xs text-muted-foreground">Email Address</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium text-foreground">+1 (555) 123-4567</div>
                  <div className="text-xs text-muted-foreground">Phone Number</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium text-foreground">Dorm Room 204, University Campus</div>
                  <div className="text-xs text-muted-foreground">Address</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <div>
                  <div className="text-sm font-medium text-foreground">September 2024</div>
                  <div className="text-xs text-muted-foreground">Enrolled Since</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Achievements</CardTitle>
            </div>
            <CardDescription>Your accomplishments and milestones</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon;
              return (
                <div
                  key={achievement.id}
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-lg transition-colors",
                    achievement.earned 
                      ? "bg-success/5 border border-success/20" 
                      : "bg-muted/5 border border-border"
                  )}
                >
                  <div className={cn(
                    "w-10 h-10 rounded-lg flex items-center justify-center",
                    achievement.earned 
                      ? "bg-success/20 text-success" 
                      : "bg-muted text-muted-foreground"
                  )}>
                    <IconComponent size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className={cn(
                      "font-medium",
                      achievement.earned ? "text-foreground" : "text-muted-foreground"
                    )}>
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{achievement.description}</p>
                  </div>
                  {achievement.earned && (
                    <Badge className="bg-success/20 text-success border-success/30">
                      Earned
                    </Badge>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Settings */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-primary" />
              <CardTitle className="text-lg">Settings</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Push Notifications</div>
                    <div className="text-xs text-muted-foreground">Get notified about classes and tasks</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Location Services</div>
                    <div className="text-xs text-muted-foreground">Enable auto-attendance via proximity</div>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-muted-foreground" />
                  <div>
                    <div className="text-sm font-medium text-foreground">Face Recognition</div>
                    <div className="text-xs text-muted-foreground">Use biometric authentication</div>
                  </div>
                </div>
                <Switch />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Button variant="outline" className="w-full justify-start" size="lg">
            <Settings className="w-5 h-5 mr-3" />
            Advanced Settings
          </Button>
          <Button variant="outline" className="w-full justify-start" size="lg">
            <Shield className="w-5 h-5 mr-3" />
            Privacy & Security
          </Button>
          <Button variant="destructive" className="w-full justify-start" size="lg">
            <LogOut className="w-5 h-5 mr-3" />
            Sign Out
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}

// Import cn function
import { cn } from "@/lib/utils";