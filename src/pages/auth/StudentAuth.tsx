import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowLeft, GraduationCap, Check, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const StudentAuth = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLogin, setIsLogin] = useState(true);
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [showVerification, setShowVerification] = useState(false);

  // Mock verification codes - in real app these would come from backend
  const verificationCodes = {
    email: ['1234', '5678', '9012'],
    mobile: ['2468', '1357', '9753']
  };

  const [selectedEmailCode, setSelectedEmailCode] = useState('');
  const [selectedMobileCode, setSelectedMobileCode] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLogin) {
      // Login logic
      toast({
        title: "Login Successful",
        description: "Welcome back to EduTrack!",
      });
      navigate('/student-dashboard');
    } else {
      // Show verification step
      setShowVerification(true);
    }
  };

  const handleVerificationSubmit = () => {
    if (selectedEmailCode === '1234' && selectedMobileCode === '2468') {
      setEmailVerified(true);
      setMobileVerified(true);
      toast({
        title: "Account Created Successfully",
        description: "Welcome to EduTrack! Please login to continue.",
      });
      setIsLogin(true);
      setShowVerification(false);
    } else {
      toast({
        title: "Verification Failed",
        description: "Please select the correct verification codes.",
        variant: "destructive",
      });
    }
  };

  if (showVerification) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-surface to-primary-light/10 flex items-center justify-center p-4">
        <Card className="w-full max-w-md shadow-glow border-0">
          <div className="p-8">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Verify Your Account</h2>
              <p className="text-muted-foreground">Select the correct verification codes</p>
            </div>

            <div className="space-y-6">
              {/* Email Verification */}
              <div>
                <Label className="text-foreground mb-3 block">Email Verification Code</Label>
                <div className="grid grid-cols-3 gap-3">
                  {verificationCodes.email.map((code, index) => (
                    <Button
                      key={index}
                      variant={selectedEmailCode === code ? "default" : "outline"}
                      className={`relative ${selectedEmailCode === code ? 'bg-primary text-primary-foreground' : ''}`}
                      onClick={() => setSelectedEmailCode(code)}
                    >
                      {code}
                      {selectedEmailCode === code && emailVerified && (
                        <Check className="w-4 h-4 absolute top-1 right-1" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Mobile Verification */}
              <div>
                <Label className="text-foreground mb-3 block">Mobile Verification Code</Label>
                <div className="grid grid-cols-3 gap-3">
                  {verificationCodes.mobile.map((code, index) => (
                    <Button
                      key={index}
                      variant={selectedMobileCode === code ? "default" : "outline"}
                      className={`relative ${selectedMobileCode === code ? 'bg-primary text-primary-foreground' : ''}`}
                      onClick={() => setSelectedMobileCode(code)}
                    >
                      {code}
                      {selectedMobileCode === code && mobileVerified && (
                        <Check className="w-4 h-4 absolute top-1 right-1" />
                      )}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  onClick={() => setShowVerification(false)}
                  className="flex-1"
                >
                  Back
                </Button>
                <Button 
                  onClick={handleVerificationSubmit}
                  className="flex-1 bg-primary hover:bg-primary-dark"
                  disabled={!selectedEmailCode || !selectedMobileCode}
                >
                  Verify Account
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-primary-light/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Student Portal</h1>
              <Badge variant="secondary">EduTrack</Badge>
            </div>
          </div>
        </div>

        <Card className="shadow-glow border-0">
          <div className="p-8">
            <Tabs value={isLogin ? "login" : "signup"} className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="login" onClick={() => setIsLogin(true)}>
                  Login
                </TabsTrigger>
                <TabsTrigger value="signup" onClick={() => setIsLogin(false)}>
                  Sign Up
                </TabsTrigger>
              </TabsList>

              <TabsContent value="login">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="loginEmail" className="text-foreground">Email or Username</Label>
                    <Input
                      id="loginEmail"
                      type="text"
                      placeholder="Enter your email or username"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="loginPassword" className="text-foreground">Password</Label>
                    <Input
                      id="loginPassword"
                      type="password"
                      placeholder="Enter your password"
                      className="mt-2"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Login to Student Portal
                  </Button>

                  <div className="text-center">
                    <Button variant="link" className="text-primary">
                      Forgot Password?
                    </Button>
                  </div>
                </form>
              </TabsContent>

              <TabsContent value="signup">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
                    <Input
                      id="fullName"
                      type="text"
                      placeholder="Enter your full name"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="regNumber" className="text-foreground">Registration Number</Label>
                    <Input
                      id="regNumber"
                      type="text"
                      placeholder="Enter your registration number"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="year" className="text-foreground">Year</Label>
                      <Select required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1st">1st Year</SelectItem>
                          <SelectItem value="2nd">2nd Year</SelectItem>
                          <SelectItem value="3rd">3rd Year</SelectItem>
                          <SelectItem value="4th">4th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="department" className="text-foreground">Department</Label>
                      <Select required>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select dept" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="csit">CSIT</SelectItem>
                          <SelectItem value="csd">CSD</SelectItem>
                          <SelectItem value="ece">ECE</SelectItem>
                          <SelectItem value="me">ME</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="section" className="text-foreground">Section</Label>
                    <Select required>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select section" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="a">Section A</SelectItem>
                        <SelectItem value="b">Section B</SelectItem>
                        <SelectItem value="c">Section C</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      className="mt-2"
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="mobile" className="text-foreground">Mobile Number</Label>
                    <Input
                      id="mobile"
                      type="tel"
                      placeholder="Enter your mobile number"
                      className="mt-2"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-primary hover:bg-primary-dark">
                    Create Student Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default StudentAuth;