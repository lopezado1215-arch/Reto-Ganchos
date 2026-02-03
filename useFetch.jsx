function useFetch(url) {
    const [data, setData] = React.useState(null);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        let mounted = true;
        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (mounted) setData(result);
            } catch (err) {
                if (mounted) setError(err.message || 'Error');
            } finally {
                if (mounted) setLoading(false);
            }
        };

        fetchData();
        return () => { mounted = false; };
    }, [url]);

    return [data, loading, error];
}