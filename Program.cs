using System;
using System.Threading;
using System.Threading.Tasks;

class Program
{
    // Метод для демонстрації роботи з Thread
    static void ThreadMethod1()
    {
        Console.WriteLine($"Thread 1 started on Thread ID: {Thread.CurrentThread.ManagedThreadId}");
        for (int i = 0; i < 5; i++)
        {
            Console.WriteLine($"Thread 1 is working... {i}");
            Thread.Sleep(500); 
        }
        Console.WriteLine("Thread 1 completed.");
    }

    // Інший метод для демонстрації роботи з Thread
    static void ThreadMethod2()
    {
        Console.WriteLine($"Thread 2 started on Thread ID: {Thread.CurrentThread.ManagedThreadId}");
        for (int i = 0; i < 3; i++)
        {
            Console.WriteLine($"Thread 2 is working... {i}");
            Thread.Sleep(700); 
        }
        Console.WriteLine("Thread 2 completed.");
    }

    // Асинхронний метод для демонстрації Async-Await
    static async Task AsyncMethod()
    {
        Console.WriteLine($"Async method started on Thread ID: {Thread.CurrentThread.ManagedThreadId}");
        await Task.Delay(1000); 
        Console.WriteLine("Async method completed.");
    }

    static void Main(string[] args)
    {
        Thread thread1 = new Thread(ThreadMethod1);
        Thread thread2 = new Thread(ThreadMethod2);

        thread1.Start(); 
        thread2.Start(); 

        Task asyncTask = AsyncMethod();
        asyncTask.Wait(); 

        thread1.Join();
        thread2.Join();

        Console.WriteLine("Main method completed.");
    }
}

