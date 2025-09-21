import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, GraduationCap, Users, Phone, Mail, Award } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleLogin = (userType: string) => {
    navigate(`/auth/${userType}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-surface to-primary-light/10">
      {/* Header */}
      <header className="bg-surface/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-success rounded-full flex items-center justify-center">
                <Award className="w-2.5 h-2.5 text-success-foreground" />
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">EduTrack</h1>
              <p className="text-sm text-muted-foreground">Smart Learning Platform</p>
            </div>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            v2.0 Enhanced
          </Badge>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-success/10 text-success px-4 py-2 rounded-full mb-6">
            <GraduationCap className="w-5 h-5" />
            <span className="text-sm font-medium">Empowering Education</span>
          </div>
          
          <h2 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Transform Your
            <span className="text-primary block">Learning Journey</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            "Learning never stops - Track attendance, manage assignments, monitor progress, 
            and excel in your academic journey with our comprehensive platform."
          </p>

          <div className="flex items-center justify-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Users className="w-4 h-4 text-primary" />
              <span>500+ Students</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="w-4 h-4 text-primary" />
              <span>50+ Teachers</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award className="w-4 h-4 text-primary" />
              <span>95% Success Rate</span>
            </div>
          </div>
        </div>

        {/* Login Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {/* Student Login */}
          <Card className="group relative overflow-hidden border-0 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <GraduationCap className="w-8 h-8 text-primary group-hover:text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Student Portal</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Access your attendance, marks, assignments, and projects in one unified dashboard
              </p>
              <Button 
                onClick={() => handleLogin('student')}
                className="w-full bg-primary hover:bg-primary-dark text-primary-foreground shadow-md hover:shadow-lg transition-all duration-300"
              >
                Student Login
              </Button>
              <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <span>📊 Attendance</span>
                <span>📝 Assignments</span>
                <span>🎯 Progress</span>
              </div>
            </div>
          </Card>

          {/* Teacher Login */}
          <Card className="group relative overflow-hidden border-0 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-success/5 to-success/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-success group-hover:text-success-foreground transition-colors duration-300">
                <Users className="w-8 h-8 text-success group-hover:text-success-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Teacher Portal</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Manage student attendance, update marks, monitor assignments and track class progress
              </p>
              <Button 
                onClick={() => handleLogin('teacher')}
                className="w-full bg-success hover:bg-success/90 text-success-foreground shadow-md hover:shadow-lg transition-all duration-300"
              >
                Teacher Login
              </Button>
              <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <span>👥 Manage</span>
                <span>✅ Evaluate</span>
                <span>📈 Analytics</span>
              </div>
            </div>
          </Card>

          {/* Admin Login */}
          <Card className="group relative overflow-hidden border-0 shadow-glow hover:shadow-xl transition-all duration-300 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-warning/5 to-warning/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative p-8 text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-warning group-hover:text-warning-foreground transition-colors duration-300">
                <Award className="w-8 h-8 text-warning group-hover:text-warning-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Admin Control</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Full system control - manage students, teachers, data, timetables and system settings
              </p>
              <Button 
                onClick={() => handleLogin('admin')}
                className="w-full bg-warning hover:bg-warning/90 text-warning-foreground shadow-md hover:shadow-lg transition-all duration-300"
              >
                Admin Login
              </Button>
              <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-muted-foreground">
                <span>🔧 Control</span>
                <span>📋 Manage</span>
                <span>⚙️ Settings</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Features Section */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-12">Why Choose EduTrack?</h3>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Smart Tracking</h4>
              <p className="text-sm text-muted-foreground">Automated attendance and progress monitoring</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-success" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Collaborative</h4>
              <p className="text-sm text-muted-foreground">Seamless student-teacher interaction</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-warning" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Achievement</h4>
              <p className="text-sm text-muted-foreground">Goal tracking and performance analytics</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-medium text-foreground mb-2">Success</h4>
              <p className="text-sm text-muted-foreground">Proven results and improved outcomes</p>
            </div>
          </div>
        </div>
      </main>

      {/* Floating Contact Box */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isContactVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-90'
        }`}
      >
        <Card className="w-64 shadow-xl border-0 bg-surface/95 backdrop-blur-sm">
          <div className="p-4">
            <div className="flex items-center justify-between mb-3">
              <h4 className="font-semibold text-foreground">Contact Us</h4>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsContactVisible(!isContactVisible)}
                className="w-8 h-8 p-0"
              >
                {isContactVisible ? '−' : '+'}
              </Button>
            </div>
            
            {isContactVisible && (
              <div className="space-y-3 animate-in slide-in-from-bottom duration-200">
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Email</p>
                    <p className="text-muted-foreground">support@edutrack.edu</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 text-sm">
                  <div className="w-8 h-8 bg-success/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-success" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">Phone</p>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer className="bg-surface border-t border-border mt-20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-foreground">EduTrack</p>
                <p className="text-xs text-muted-foreground">Educational Excellence</p>
              </div>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground">
                © 2024 EduTrack. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Empowering education through intelligent technology
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;