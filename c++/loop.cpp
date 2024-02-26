#include <iostream>
using namespace std;

int main()
{

    int n, i = 1;

    cout << "Enter a Number" << endl;
    cin >> n;

    cout << "Printing a number 1 to n" << endl;

    for (;;)
    {
        if (i <= n)
        {
            cout << i << endl;
        }
        else
        {
            break;
        }

        i++;
    }
}