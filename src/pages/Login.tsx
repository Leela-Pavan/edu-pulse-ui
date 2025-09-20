import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GraduationCap, Users, Shield, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [userType, setUserType] = useState<"student" | "teacher" | "admin">("student");
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual authentication
    navigate("/");
  };

  const userTypeConfig = {
    student: {
      title: "Student Portal",
      description: "Access your classes, attendance, and tasks",
      icon: GraduationCap,
      color: "text-primary",
    },
    teacher: {
      title: "Teacher Portal", 
      description: "Manage classes and student attendance",
      icon: Users,
      color: "text-success",
    },
    admin: {
      title: "Admin Portal",
      description: "System administration and oversight", 
      icon: Shield,
      color: "text-warning",
    },
  };

  const config = userTypeConfig[userType];
  const IconComponent = config.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-success/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow-glow">
              <GraduationCap className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-foreground">EduTrack</h1>
          <p className="text-muted-foreground">Smart attendance & productivity for education</p>
        </div>

        {/* User Type Selection */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6 space-y-6">
            <div className="grid grid-cols-3 gap-2 p-1 bg-muted rounded-lg">
              {(Object.keys(userTypeConfig) as Array<keyof typeof userTypeConfig>).map((type) => {
                const typeConfig = userTypeConfig[type];
                const TypeIcon = typeConfig.icon;
                return (
                  <button
                    key={type}
                    onClick={() => setUserType(type)}
                    className={cn(
                      "flex flex-col items-center gap-2 p-3 rounded-md transition-all duration-200",
                      userType === type
                        ? "bg-surface shadow-sm text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <TypeIcon size={20} className={userType === type ? typeConfig.color : ""} />
                    <span className="text-xs font-medium capitalize">{type}</span>
                  </button>
                );
              })}
            </div>

            {/* Portal Info */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center gap-2">
                <IconComponent size={20} className={config.color} />
                <h2 className="text-lg font-semibold">{config.title}</h2>
              </div>
              <p className="text-sm text-muted-foreground">{config.description}</p>
            </div>

            {/* Login/Signup Toggle */}
            <Tabs value={isLogin ? "login" : "signup"} onValueChange={(value) => setIsLogin(value === "login")} className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="login">Sign In</TabsTrigger>
                <TabsTrigger value="signup">Sign Up</TabsTrigger>
              </TabsList>

              <TabsContent value="login" className="space-y-4 mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email or Student ID</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="Enter your email"
                        className="pl-10"
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Enter your password"
                        className="pl-10"
                        required 
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" variant="hero" size="lg">
                    Sign In to {config.title}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="signup" className="space-y-4 mt-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="john.doe@school.edu"
                        className="pl-10"
                        required 
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input 
                        id="password" 
                        type="password" 
                        placeholder="Create a strong password"
                        className="pl-10"
                        required 
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" variant="hero" size="lg">
                    Create {config.title.split(" ")[0]} Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="text-center">
              <Button variant="link" size="sm" className="text-muted-foreground">
                Forgot your password?
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Import cn function
import { cn } from "@/lib/utils";