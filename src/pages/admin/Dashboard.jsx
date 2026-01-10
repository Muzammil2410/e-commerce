import AnimatedSection from "@/components/AnimatedSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, DollarSign, Package } from "lucide-react";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  // Mock data - in real app, this would come from API
  const stats = [
    {
      title: "Total Orders",
      value: "1,234",
      icon: ShoppingBag,
    },
    {
      title: "Total Revenue",
      value: "PKR 45,678",
      icon: DollarSign,
    },
    {
      title: "Total Users",
      value: "892",
      icon: Users,
    },
    {
      title: "Total Products",
      value: "100",
      icon: Package,
    },
  ];

  // Order trends data (last 7 days)
  const orderTrends = [
    { day: "Mon", orders: 45, revenue: 12500 },
    { day: "Tue", orders: 52, revenue: 14200 },
    { day: "Wed", orders: 48, revenue: 13800 },
    { day: "Thu", orders: 61, revenue: 16800 },
    { day: "Fri", orders: 55, revenue: 15200 },
    { day: "Sat", orders: 67, revenue: 18900 },
    { day: "Sun", orders: 58, revenue: 16200 },
  ];

  // Best-selling products
  const bestSellingProducts = [
    { name: "NO.31", sales: 145, revenue: 43500 },
    { name: "NO.44", sales: 132, revenue: 39600 },
    { name: "BLACK VANILLA", sales: 128, revenue: 38400 },
    { name: "NOIR JASMINE", sales: 115, revenue: 34500 },
    { name: "FRUITÉ PARFAIT", sales: 98, revenue: 29400 },
  ];

  const recentOrders = [
    {
      id: "ORD-001",
      customer: "John Doe",
      amount: "$299.00",
      status: "Pending",
      date: "2024-01-15",
    },
    {
      id: "ORD-002",
      customer: "Jane Smith",
      amount: "$149.00",
      status: "Completed",
      date: "2024-01-14",
    },
    {
      id: "ORD-003",
      customer: "Mike Johnson",
      amount: "$449.00",
      status: "Processing",
      date: "2024-01-14",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      <AnimatedSection>
        <div>
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-foreground mb-2">
            Dashboard
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Overview of your eCommerce platform
          </p>
        </div>
      </AnimatedSection>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <AnimatedSection key={stat.title} delay={index * 100} className="h-full">
              <Card className="bg-card border-border h-full flex flex-col justify-between">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-xs sm:text-sm tracking-luxury uppercase text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-muted-foreground" />
                </CardHeader>

                <CardContent className="flex-1 flex items-end">
                  <div className="text-2xl sm:text-3xl font-light text-foreground">
                    {stat.value}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Order Trends Chart */}
        <AnimatedSection delay={400}>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl font-light text-foreground">
                Order Trends (Last 7 Days)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={orderTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="day"
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: "12px" }}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: "12px" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "4px"
                    }}
                  />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="orders"
                    stroke="hsl(var(--accent))"
                    strokeWidth={2}
                    name="Orders"
                  />
                  <Line
                    type="monotone"
                    dataKey="revenue"
                    stroke="hsl(var(--primary))"
                    strokeWidth={2}
                    name="Revenue (PKR)"
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Best Selling Products Chart */}
        <AnimatedSection delay={500}>
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-lg sm:text-xl font-light text-foreground">
                Best Selling Products
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={bestSellingProducts}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: "12px" }}
                    angle={-45}
                    textAnchor="end"
                    height={80}
                  />
                  <YAxis
                    stroke="hsl(var(--muted-foreground))"
                    style={{ fontSize: "12px" }}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "4px"
                    }}
                  />
                  <Legend />
                  <Bar
                    dataKey="sales"
                    fill="hsl(var(--accent))"
                    name="Sales"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Recent Orders */}
      <AnimatedSection delay={600}>
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-lg sm:text-xl font-light text-foreground">
              Recent Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-4 border border-border bg-background"
                >
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{order.id}</p>
                    <p className="text-xs text-muted-foreground">{order.customer}</p>
                  </div>
                  <div className="text-right space-y-1">
                    <p className="text-sm font-medium text-foreground">{order.amount}</p>
                    <p className="text-xs text-muted-foreground">{order.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
};

export default Dashboard;

